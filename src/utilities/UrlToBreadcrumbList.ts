export const urlToBreadcrumbList = (url: string) => {
  const list = url.split("/");
  list[0] = "home";
  return list;
};
