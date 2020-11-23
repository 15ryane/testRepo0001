import * as React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Box } from "@material-ui/core";

// context
import {
  useAppContext,
  useAppDispatch
} from "../../contexts/AppContext/AppContext";

const Theme = ({ children }) => {
  const appContext = useAppContext();
  const appDispatch = useAppDispatch();
  React.useEffect(() => {
    window._toggleTheme = () => appDispatch({ type: "TOGGLE_THEME" });
    if (window._themeMode !== appContext.themeMode)
      appDispatch({ type: "TOGGLE_THEME" });
  }, []);
  const genericTheme = createMuiTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    }
  });
  const theme = {
    dark: createMuiTheme({
      ...genericTheme,
      palette: {
        type: "dark",
        primary: {
          main: "#a6d6ce" // bluegrass_400
        }
      }
    }),
    light: createMuiTheme({
      ...genericTheme,
      palette: {
        type: "light",
        primary: {
          main: "#407068" // bluegrass_700
        }
      }
    })
  };
  return (
    <Box width={"100%"}>
      <CssBaseline />
      <ThemeProvider theme={theme[window._themeMode]}>{children}</ThemeProvider>
    </Box>
  );
};

export default Theme;
