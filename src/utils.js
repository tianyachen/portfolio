const imageModules = import.meta.glob("./assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const getImageUrl = (relativePath) => {
  return imageModules[`./assets/${relativePath}`];
};

// export const allImagePaths = Object.keys(imageModules).map((path) =>
//   path.replace("./assets/", "")
// );

// export const getImageUrl = (path) => {
//   return new URL(`./assets/${path}`, import.meta.url).href;
// };
