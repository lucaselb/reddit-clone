import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { MdModeComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import Post from "../types/post";
import styles from "./Card.module.scss";

function Card(props: { posts: Post[] }) {
  const [isOpen, setMenu] = useState<boolean>(false);
  const redditURL = "https://reddit.com/";

  const openLink = (url: string) => {
    window.open(redditURL + url, "_blank");
  };

  return (
    <Stack spacing={5} direction="column" className={styles.container}>
      {props.posts.map((post) => (
        <Stack
          direction="row"
          className={styles.post}
          key={post.id}
          spacing={0}
        >
          <Stack direction="column" width="40px" bg="#161617">
            <IconButton
              aria-label="Vote up"
              icon={<GoArrowUp />}
              className={styles.voteBtn}
            />
            <Text fontSize="xs" textAlign="center">
              {post.ups}
            </Text>
            <IconButton
              aria-label="Vote up"
              icon={<GoArrowDown />}
              className={styles.voteBtn}
            />
          </Stack>
          <Stack direction="column" width="100%" bg="#1a1a1b">
            <Link
              fontSize="12px"
              href={redditURL + post.subreddit_name_prefixed}
              pl={2}
              pr={2}
              pt={2}
            >
              {`r/` + post.subreddit}
            </Link>
            <Link
              className={styles.title}
              href={redditURL + post.permalink}
              isExternal
              fontSize="18px"
              pl={2}
              pr={2}
            >
              {post.title}
            </Link>
            {post.thumbnail && post.thumbnail.match(/(jpg|png|gif)/) && (
              <Box w="100%">
                <Image src={post.thumbnail} objectFit="cover" w="100%" />
              </Box>
            )}

            <Stack
              direction="row"
              className={styles.cardBtnContainer}
              pl={2}
              pr={2}
            >
              <Button leftIcon={<MdModeComment />}>
                {post.num_comments} Comments
              </Button>
              <Button leftIcon={<RiShareForwardFill />}>Share</Button>
              <Button>Save</Button>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  border="1px solid transparent"
                  _hover={{ bg: "inherit", border: "1px solid #343536" }}
                  _active={{ bg: "inherit", border: "1px solid #343536" }}
                  w="68px"
                  h="32px"
                  bg="inherit"
                  onClick={() => setMenu(!isOpen)}
                >
                  ...
                </MenuButton>
                <MenuList className={styles.menuContainer} hidden={!isOpen}>
                  <MenuItem>Hide</MenuItem>
                  <MenuDivider />
                  <MenuItem>Report</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default Card;
