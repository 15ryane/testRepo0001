import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";

import { CONTAINER_NAME } from "./const/general";

window[`render${CONTAINER_NAME}`] = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window[`unmount${CONTAINER_NAME}`] = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
