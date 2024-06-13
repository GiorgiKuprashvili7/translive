import { useLocation } from "react-router";

export const useBreadcrumbList = () => {
  const location = useLocation();
  console.log(location);
  const list = location.pathname.split("/");
  list[0] = "home";

  return list.filter((o) => o !== "");
};
