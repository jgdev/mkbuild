import { useEffect } from "react";
import { useUiContext } from "../contexts/ui";
import { CurrencyDollarIcon } from "@heroicons/react/outline";

export const PageBuildContainers = () => {
  const { setUiHeader } = useUiContext();
  useEffect(() => {
    setUiHeader({
      header: "Hello world",
      subHeader: "test",
      actions: [
        {
          id: "test-button",
          icon: CurrencyDollarIcon,
          children: "Test Button",
          className:
            "text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          onClick: () => alert("hello wolrd"),
        },
        {
          id: "remove",
          children: "hello",
          className: "text-white bg-red-400",
        },
      ],
    });
  }, []);
  return <>hello world</>;
};

export default PageBuildContainers;
