export const getURLSlug = (shortUrl: string) => {
  const url = new URL(shortUrl);

  return url.pathname.replace("/", "");
};
