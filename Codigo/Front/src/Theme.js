const getTheme = () => ({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  // componentes não-chakra
  styles: {
    global: {
      ".home-container-global": {
        margin: "10px",
        maxWidth: "100vw",
        // minHeight: "100vh",
      },

      ".navbar": {},

      ".logo-nav": {
        viewBox: "0 0 20 20",
      },

      ".footer": {
        pos: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        width: "100vw",
        maxH: "20px", // !!! esta causando problemas de responsividade
      },
    },
  },

  // componentes chakra
  components: {
    Button: {
      variants: {
        default: {},
        btn1: {
          backgroundColor: "#FF93A6",
          color: "#faf2f4",
          _hover: {
            backgroundColor: "#ff5e7b",
          },
        },
      },

      defaultProps: {
        variant: "default",
      },
    },
  },
});

export { getTheme };
