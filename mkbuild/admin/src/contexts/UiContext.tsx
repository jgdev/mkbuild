import React, { createContext, useContext, useEffect, useState } from "react";

export type UiContextTheme = "dark" | "light";

export type HeaderAction = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: any;
  id: string;
};

export type BreadcrumLink = {
  title: string;
  id: string;
  href: string;
  showIf?: () => boolean;
};

export type UiHeader = {
  header?: string | React.ReactNode;
  subHeader?: string | React.ReactNode;
  actions: HeaderAction[] | React.ReactNode;
  breadcrumLinks?: BreadcrumLink[];
};

export type UiContext = {
  theme: UiContextTheme;
  setTheme: (theme: UiContextTheme) => void;
  uiHeader: Partial<UiHeader>;
  setUiHeader: (uiHeader: Partial<UiHeader>) => void;
  currentBreadcrumLink?: {
    breadcrumLink: BreadcrumLink;
    index: number;
  };
  setCurrentBreadcrumLink: (
    currentBreadcrumLink:
      | {
          breadcrumLink: BreadcrumLink;
          index: number;
        }
      | undefined
  ) => void;
};

export const initialState: Partial<UiContext> = {};

export const UiContext = createContext(initialState as UiContext);

export const useUiContext = () => useContext(UiContext);

export const withUiContext =
  (Component: any, value?: Partial<UiContext>) => (props: any) => {
    const [theme, setTheme] = useState<UiContextTheme>("light");
    const [uiHeader, _setUiHeader] = useState<Partial<UiHeader>>({});
    const [currentBreadcrumLink, setCurrentBreadcrumLink] = useState<
      { breadcrumLink: BreadcrumLink; index: number } | undefined
    >();

    const setUiHeader = (value: Partial<UiHeader>) =>
      _setUiHeader({ ...uiHeader, ...value });

    useEffect(() => {
      if (
        uiHeader?.breadcrumLinks &&
        uiHeader?.breadcrumLinks.length > 0 &&
        !currentBreadcrumLink
      ) {
        setCurrentBreadcrumLink({
          breadcrumLink: uiHeader?.breadcrumLinks![0],
          index: 0,
        });
      }
    }, [uiHeader?.breadcrumLinks]);

    return (
      <UiContext.Provider
        value={{
          theme,
          setTheme,
          uiHeader,
          setUiHeader,
          currentBreadcrumLink,
          setCurrentBreadcrumLink,
          ...value,
        }}
      >
        <Component {...props} />
      </UiContext.Provider>
    );
  };
