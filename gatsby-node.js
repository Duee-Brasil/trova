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

exports.onPostBuild = async function ({ cache, graphql }, { query }) {
    const cacheKey = "cache-site";
    const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000; // 86400000
    let obj = await cache.get(cacheKey);
  
    if (!obj) {
      obj = { created: Date.now() };
      const data = await graphql(query);
      obj.data = data;
    } else if (Date.now() > obj.lastChecked + twentyFourHoursInMilliseconds) {
      /* Reload after a day */
      const data = await graphql(query);
      obj.data = data;
    }
  
    obj.lastChecked = Date.now();
  
    await cache.set(cacheKey, obj);
  
    /* Do something with data ... */
  };
  