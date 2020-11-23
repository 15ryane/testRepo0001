declare global {
  interface Window {
    _themeMode: "light" | "dark";
    _toggleTheme: React.Dispatch<undefined>;
    _microUiName: string;
    _microUiVersion: string;
  }

  var GIT_HASH: string;
}

export {};
