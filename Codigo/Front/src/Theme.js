const getTheme = () => ({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  // componentes não-chakra
  styles: {
    global: {
      ".form-input": {
        _focus: {
          borderColor: '#B6DFD8'
        }
      },

      ".logo-nav": {},

      ".footer": {
        marginBottom: 0,
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
        btn2: {
          backgroundColor: "#8FD4A1",
          color: "#faf2f4",
          _hover: {
            backgroundColor: "#66B87B",
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
