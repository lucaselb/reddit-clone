import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink,
  Switch,
} from "react-router-dom";
import styles from "./App.module.scss";
import {
  Stack,
  Image,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  Switch as SwitchChakra,
  MenuGroup,
  MenuItem,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Home from "./pages/Home";
import api from "./api";
import Logo from "./logo.svg";
import Reddit from "./reddit.svg";
import { BsPersonFill } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

function App() {
  const [isOpen, setMenu] = useState<boolean>(false);

  return (
    <Router>
      <Stack direction="column" className={styles.container}>
        <Stack direction="row" className={styles.navbar}>
          <Stack spacing={2} align="center" direction="row" as="a" href="/">
            <Image src={Logo} w="32px" h="32px" />
            <Image src={Reddit} w="57px" h="18px" />
          </Stack>

          <Stack p={2} align="center" direction="row" maxW="598px" w="100%">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="#818384" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Stack>

          <Stack align="center" direction={["column", "row", "row"]}>
            <Stack direction="row">
              <Button
                borderRadius="20px"
                color="#d7dadc"
                border="1px solid white"
                h="34px"
                bg="inherit"
                _hover={{ bg: "#212223" }}
                _active={{ bg: "#212223" }}
              >
                Log In
              </Button>

              <Button
                borderRadius="20px"
                color="#1A1A1B"
                border="1px solid white"
                h="34px"
                bg="#D7DADC"
                _hover={{ bg: "#C8CBCD" }}
                _active={{ bg: "#C8CBCD" }}
              >
                Sign Up
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  leftIcon={<BsPersonFill fill="#818384" />}
                  rightIcon={<RiArrowDownSFill fill="#818384" />}
                  border="1px solid transparent"
                  _hover={{ bg: "inherit", border: "1px solid #343536" }}
                  _active={{ bg: "inherit", border: "1px solid #343536" }}
                  w="68px"
                  h="32px"
                  bg="inherit"
                  onClick={() => setMenu(!isOpen)}
                ></MenuButton>
                <MenuList className={styles.menuContainer} hidden={!isOpen}>
                  {/* <MenuGroup title="VIEW OPTIONS" fontSize="xs">
                    <MenuItem>
                      Night Mode <SwitchChakra size="md" ml="20px" />
                    </MenuItem>
                  </MenuGroup> */}
                  <MenuGroup title="MORE STUFF" fontSize="xs">
                    <MenuItem
                      as="a"
                      href="https://reddit.com/coins"
                      target="_blank"
                    >
                      Reddit Coins
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="https://reddit.com/premium"
                      target="_blank"
                    >
                      Reddit Premium
                    </MenuItem>
                    <MenuItem
                      as="a"
                      href="https://reddithelp.com/"
                      target="_blank"
                    >
                      Help Center
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem as="a" href="https://reddit.com/" target="_blank">
                      Log In / Sign Up
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          backgroundColor="black"
          marginTop="0"
          className={styles.content}
        >
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Stack>
      </Stack>
    </Router>
  );
}

export default App;
