import * as React from "react";

export interface AppStore {
  themeMode: "light" | "dark";
}

export interface AppAction {
  type: "TOGGLE_THEME";
  payload?: any;
}

const appReducer: React.Reducer<AppStore, AppAction> = (
  state: AppStore,
  action: AppAction
): AppStore => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        themeMode: window._themeMode
      };
    default:
      throw new Error("Dispatch called with invalid or missing action");
  }
};

const initialAppStore: AppStore = {
  themeMode: window._themeMode,
};

const AppContext = React.createContext<AppStore | undefined>(undefined);
const AppDispatch = React.createContext<React.Dispatch<AppAction> | undefined>(
  undefined
);

const AppProvider = ({ children }) => {
  const [appContext, appDispatch] = React.useReducer(
    appReducer,
    initialAppStore
  );

  return (
    <AppContext.Provider value={appContext}>
      <AppDispatch.Provider value={appDispatch}>
        {children}
      </AppDispatch.Provider>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("appContext must be used within a AppContext Provider.");
  }
  return context;
};

const useAppDispatch = () => {
  const dispatch = React.useContext(AppDispatch);
  if (dispatch === undefined) {
    throw new Error("appDispatch must be used within an AppDispatch Provider.");
  }
  return dispatch;
};

export { AppProvider, useAppContext, useAppDispatch };
