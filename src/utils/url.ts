export const getUrl = () => {
  const { protocol, host, pathname } = window.location;
  return `${protocol}//${host}${pathname}`;
};
