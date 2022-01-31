import { useApplicationContext } from "@mkbuild/contexts/ApplicationContext";
import { AppContainer } from "@mkbuild/lib/src/services/appContainers";
import { Link } from "react-router-dom";

export type AppContainerListProps = {
  data: AppContainer[];
};

export const AppContainerList = (props: AppContainerListProps) => {
  const { currentEnvironment } = useApplicationContext();
  return (
    <>
      List {currentEnvironment?.name}
      <br />
      <Link to="/1">Go to details</Link>
    </>
  );
};

export default AppContainerList;
