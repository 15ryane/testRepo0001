// ext deps
import * as React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import DateFnsUtils from "@date-io/date-fns";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// components
import Main from "../Main/Main";
import Theme from "../Theme/Theme";

// context
import { AppProvider } from "../../contexts/AppContext/AppContext";

// gql deps
import { ApolloProvider } from "@apollo/react-hooks";
import { gqlClient } from "../../lib/api";

// consts
import { FIGMA, CONTAINER_NAME, VERSION } from "../../const/general";

const App = ({ history }) => {
  const defaultHistory = createBrowserHistory();

  const generateClassName = createGenerateClassName({
    seed: FIGMA
  });

  window._microUiName = CONTAINER_NAME;
  window._microUiVersion = VERSION;

  return (
    <ApolloProvider client={gqlClient}>
      <StylesProvider generateClassName={generateClassName}>
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <AppProvider>
              <Theme>
                <Router history={history || defaultHistory}>
                  <Switch>
                    <Route path="/pms-tool">
                      <Main />
                    </Route>
                  </Switch>
                </Router>
              </Theme>
            </AppProvider>
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </StylesProvider>
    </ApolloProvider>
  );
};

export default App;
