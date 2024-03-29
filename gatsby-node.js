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

    // Função para verificar se a extensão é uma imagem
    const isImage = (filePath) => /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(filePath);

    // Função para verificar se a extensão é uma fonte
    const isFont = (filePath) => /\.(woff|woff2|ttf|otf)$/i.test(filePath);

    // Função para verificar se a extensão é um vídeo
    const isVideo = (filePath) => /\.(mp4|webm|ogg)$/i.test(filePath);

    const processFile = (filePath, cachePath) => {
      if (!fs.existsSync(cachePath)) {
        sharp(filePath)
          .resize({ width: 800 })
          .toFile(cachePath);
      }
      // Atualiza o conteúdo do MDX com o caminho do arquivo em cache
      node.content = content.replace(filePath, cachePath);
    };

    if (frontmatter.image && isImage(frontmatter.image)) {
      const imagePath = path.resolve(frontmatter.image);
      const imageCachePath = path.join(process.cwd(), "static", "public", "src/images", "src/fonts", "cache", path.basename(imagePath));
      processFile(imagePath, imageCachePath);
    }

    if (frontmatter.fonts) {
      const fonts = frontmatter.fonts.split(",");
      for (const font of fonts) {
        const fontPath = path.resolve(font);
        const fontCachePath = path.join(process.cwd(), "static", "public", "src/images", "src/fonts", "cache", path.basename(fontPath));
        if (isFont(fontPath)) {
          processFile(fontPath, fontCachePath);
        }
      }
      // Atualiza o conteúdo do MDX com os caminhos das fontes em cache
      frontmatter.fonts = fonts.map((font) => path.join("static", "public", "src/images", "src/fonts", "cache", path.basename(font)));
    }

    if (frontmatter.video && isVideo(frontmatter.video)) {
      const videoPath = path.resolve(frontmatter.video);
      const videoCachePath = path.join(process.cwd(), "static", "public", "src/images", "src/fonts", "cache", path.basename(videoPath));
      processFile(videoPath, videoCachePath);
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