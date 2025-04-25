export const getImageUrl = (path) => {
  const relPath = `/assets/${path}`;
  return new URL(relPath, import.meta.url).href;
};
