export default () => {
  return {
    name: "replace-math",
    enforce: "pre",
    transform(src, id) {
      if (id.endsWith(".mdx")) {

        src = src.replace('code: "code",', '');
        src = src.replace('span: "span",', '');

        console.log("===", src)
        return {
          code: src,
          map: null,
        };
      }
    },
  };
};
