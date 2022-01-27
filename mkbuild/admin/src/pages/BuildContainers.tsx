import { useEffect } from "react";
import { useLocation, matchRoutes, useParams } from "react-router-dom";

export const PageBuildContainers = () => {
  const location = useLocation();
  const { name } = useParams();

  useEffect(() => {
    console.log("render first time");
  }, []);

  useEffect(() => {
    console.log("render by location key:", location.key, location);
  }, [location.key]);

  return <>Hello world{name && `, ${name}`}</>;
};

export default PageBuildContainers;
