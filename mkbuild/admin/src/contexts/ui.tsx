import React, { createContext, useContext, useState } from "react";

export type UiContextTheme = "dark" | "light";

export type HeaderActions = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: any;
  id: string;
};

export type UiHeader = {
  header?: string | React.ReactNode;
  subHeader?: string | React.ReactNode;
  actions: HeaderActions[] | React.ReactNode;
};

export type UiContext = {
  theme: UiContextTheme;
  setTheme: (theme: UiContextTheme) => void;
  uiHeader: Partial<UiHeader>;
  setUiHeader: (uiHeader: Partial<UiHeader>) => void;
};

export const initialState: Partial<UiContext> = {};

export const UiContext = createContext(initialState as UiContext);

export const useUiContext = () => useContext(UiContext);

export const withUiContext =
  (Component: any, value?: Partial<UiContext>) => (props: any) => {
    const [theme, setTheme] = useState<UiContextTheme>("light");
    const [uiHeader, _setUiHeader] = useState<Partial<UiHeader>>({});

    const setUiHeader = (value: Partial<UiHeader>) =>
      _setUiHeader({ ...uiHeader, ...value });

    return (
      <UiContext.Provider
        value={{
          theme,
          setTheme,
          uiHeader,
          setUiHeader,
          ...value,
        }}
      >
        <Component {...props} />
      </UiContext.Provider>
    );
  };
