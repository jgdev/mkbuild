import { createContext, useContext, useState } from "react";

export type UiContextTheme = "dark" | "light";

export type UiContext = {
  theme: UiContextTheme;
  setTheme: (theme: UiContextTheme) => void;
};

export const initialState: Partial<UiContext> = {};

export const UiContext = createContext(initialState);

export const useUiContext = () => useContext(UiContext);

export const withUiContext =
  (Component: any, value?: Partial<UiContext>) => (props: any) => {
    const [theme, setTheme] = useState<UiContextTheme>("light");

    return (
      <UiContext.Provider
        value={{
          theme,
          setTheme,
          ...value,
        }}
      >
        <Component {...props} />
      </UiContext.Provider>
    );
  };
