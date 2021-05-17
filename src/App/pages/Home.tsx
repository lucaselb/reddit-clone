import {
  Button,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../layouts/Card";
import styles from "./Home.module.scss";
import Post from "../types/post";
import api from "../api";
import { HiFire } from "react-icons/hi";
import { TiStarburst } from "react-icons/ti";
import { BiTrendingUp } from "react-icons/bi";
import TopCommunities from "../components/TopCommunities";
import Classic from "../layouts/Classic";
import {
  RiLayoutBottomFill,
  RiLayoutFill,
  RiLayoutMasonryFill,
} from "react-icons/ri";
import { AiFillLayout } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import Compact from "../layouts/Compact";

enum Filter {
  Hot = "hot",
  New = "new",
  Top = "top",
}

function Home() {
  const [layout, setLayout] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.Hot);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setMenu] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api
      .getPosts(filter)
      .then((items) => {
        setPosts(items);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, [filter]);

  useEffect(() => {
    const layoutStored = localStorage.getItem("layout") || "1";

    setLayout(parseInt(layoutStored));
  }, []);

  const changeLayout = (id: number) => {
    setLayout(id);
    setMenu(false);
    localStorage.setItem("layout", id.toString());
  };

  return (
    <Flex padding={10} className={styles.container}>
      <Stack spacing={5} direction="column" maxWidth="640px" width="100%">
        <Heading as="h2" fontSize="14px">
          Popular posts
        </Heading>
        <Stack
          spacing={2}
          padding={5}
          align="center"
          direction="row"
          height="44px"
          maxWidth="640px"
          width="100%"
          borderRadius="4px"
          border="1px solid #343536"
          className={styles.filterBtnContainer}
        >
          <Button
            leftIcon={<HiFire />}
            onClick={() => setFilter(Filter.Hot)}
            isActive={filter === Filter.Hot}
          >
            Hot
          </Button>
          <Button
            leftIcon={<TiStarburst />}
            onClick={() => setFilter(Filter.New)}
            isActive={filter === Filter.New}
          >
            New
          </Button>
          <Button
            leftIcon={<BiTrendingUp />}
            onClick={() => setFilter(Filter.Top)}
            isActive={filter === Filter.Top}
          >
            Top
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              border="1px solid transparent"
              _hover={{ bg: "inherit", border: "1px solid #343536" }}
              _active={{ bg: "inherit", border: "1px solid #343536" }}
              w="68px"
              h="32px"
              bg="inherit"
              onClick={() => setMenu(!isOpen)}
              leftIcon={<AiFillLayout />}
              rightIcon={<RiArrowDownSFill fill="#D7DADC" />}
            ></MenuButton>
            <MenuList
              className={styles.menuContainer}
              border="1px solid #343536"
              hidden={!isOpen}
            >
              <MenuItem onClick={() => changeLayout(1)}>
                <RiLayoutBottomFill />
                <Text ml="10px">Card</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => changeLayout(2)}>
                <RiLayoutFill />
                <Text ml="10px">Classic</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => changeLayout(3)}>
                <RiLayoutMasonryFill />
                <Text ml="10px">Compact</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack className={styles.spinner}>
          <Spinner hidden={!isLoading} size="xl" />
        </Stack>
        <Stack hidden={isLoading}>
          {layout === 1 && <Card posts={posts} />}
          {layout === 2 && <Classic posts={posts} />}
          {layout === 3 && <Compact posts={posts} />}
        </Stack>
      </Stack>
      <Stack
        direction="column"
        maxWidth="312px"
        w="100%"
        display={{ base: "none", md: "flex" }}
      >
        <Container mt="36px">
          <TopCommunities />
        </Container>
      </Stack>
    </Flex>
  );
}

export default Home;
