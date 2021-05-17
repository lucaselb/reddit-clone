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
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { MdModeComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import Post from "../types/post";
import styles from "./Compact.module.scss";
import { MdComment } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";

function Compact(props: { posts: Post[] }) {
  const [isOpen, setMenu] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const redditURL = "https://reddit.com/";

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  const openLink = (url: string) => {
    window.open(redditURL + url, "_blank");
  };

  const openImage = (post: Post) => {
    const postList = [...posts];
    postList.map((data, index) => {
      if (postList[index].id === post.id)
        postList[index].display_image = !postList[index].display_image;
    });
    setPosts(postList);
  };

  return (
    <Stack spacing={5} direction="column" className={styles.container}>
      {posts.map((post) => (
        <Stack direction="column" spacing={1} key={post.id}>
          <Stack
            direction="row"
            className={styles.post}
            key={post.id}
            spacing={0}
          >
            <Stack direction="row" w="90px" bg="#161617">
              <IconButton
                aria-label="Vote up"
                icon={<GoArrowUp />}
                className={styles.voteBtn}
                size="10px"
              />
              <Text fontSize="xs">{post.ups}</Text>
              <IconButton
                aria-label="Vote up"
                icon={<GoArrowDown />}
                className={styles.voteBtn}
                size="10px"
              />
            </Stack>
            <Stack
              direction="column"
              w="45px"
              minW="45px"
              bg="#1a1a1b"
              h="100%"
            >
              <Box mt="4px">
                {post.thumbnail && post.thumbnail.match(/(jpg|png|gif)/) && (
                  <AiFillPicture
                    tabIndex={0}
                    onKeyPress={(e) => e.key === "Enter" && openImage(post)}
                    onClick={() => openImage(post)}
                  />
                )}
              </Box>
            </Stack>
            <Stack direction="column" w="100%" bg="#1a1a1b" spacing={0}>
              <Link
                className={styles.title}
                href={redditURL + post.permalink}
                isExternal
                pl={2}
                pr={2}
              >
                {post.title}
              </Link>
              <Link
                fontSize="12px"
                href={redditURL + post.subreddit_name_prefixed}
                pl={2}
                pr={2}
              >
                {`r/` + post.subreddit}
              </Link>
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
                  <MenuList
                    className={styles.menuContainer}
                    bg="#1a1a1b"
                    hidden={!isOpen}
                  >
                    <MenuItem>Hide</MenuItem>
                    <MenuDivider />
                    <MenuItem>Report</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            {post.thumbnail &&
              post.thumbnail.match(/(jpg|png|gif)/) &&
              post.display_image && (
                <Box w="100%">
                  <Image src={post.thumbnail} objectFit="cover" w="100%" />
                </Box>
              )}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default Compact;
