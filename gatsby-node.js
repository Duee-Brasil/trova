// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


// gatsby-node.js

const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

exports.onCreateNode = ({ node, actions }, _args) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const { frontmatter, content } = node;

    if (frontmatter.image) {
      const imagePath = path.resolve(frontmatter.image);

      // Cria uma cópia em cache da imagem
      const imageCachePath = path.join(process.cwd(), "public", "src/images", "src/fonts", "cache", path.basename(imagePath));

      if (!fs.existsSync(imageCachePath)) {
        sharp(imagePath)
          .resize({ width: 800 })
          .toFile(imageCachePath);
      }

      // Atualiza o conteúdo do MDX com o caminho da imagem em cache
      node.content = content.replace(frontmatter.image, imageCachePath);
    }

    if (frontmatter.fonts) {
      const fonts = frontmatter.fonts.split(",");

      // Cria uma cópia em cache de cada fonte
      for (const font of fonts) {
        const fontPath = path.resolve(font);

        const fontCachePath = path.join(process.cwd(), "public", "fonts", "cache", path.basename(fontPath));

        if (!fs.existsSync(fontCachePath)) {
          fs.copyFileSync(fontPath, fontCachePath);
        }
      }

      // Atualiza o conteúdo do MDX com os caminhos das fontes em cache
      frontmatter.fonts = fonts.map((font) => path.join("public", "fonts", "cache", path.basename(font)));
    }

    createNodeField({
      node,
      name: "content",
      value: node.content,
    });

    createNodeField({
      node,
      name: "frontmatter",
      value: frontmatter,
    });
  }
};
