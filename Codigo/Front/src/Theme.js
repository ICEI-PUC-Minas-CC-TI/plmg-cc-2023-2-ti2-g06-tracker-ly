const getTheme = () => ({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  // componentes não-chakra
  styles: {
    global: {
      ".footer": {
        marginBottom: 0,
      },
    },
  },

  colors: {
    blue: "#B6DFD8",
    pink: "#FF93A6",
    green: "#8FD4A1",
    lightPink: "#FFCBD4",
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

    Input: {
      _focus: {
        borderColor: '#B6DFD8'
      },
      backgroundColor: "#faf2f4",
    }
  },
});

export { getTheme };
