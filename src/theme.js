// // theme.js

// // 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
// const config = {
//   //   initialColorMode: "dark",
//   //   useSystemColorMode: false,
//   light: {
//     bg: "black",
//   },
//   dark: {
//     bg: "black",
//   },
// };

// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "black",
      },
    },
  },
});

export default theme;
