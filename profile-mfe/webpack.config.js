const { merge } = require("webpack-merge");
const singleSpaReact = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (env) => {
  const defaultConfig = singleSpaReact({
    ...env,
    orgName: "codenv",
    projectName: "profile-mfe",
  });
  return merge(defaultConfig, {
    resolve: {
      symlinks: false,
      modules: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "../node_modules"),
        "node_modules",
      ],
      alias: {
        "@shared": path.resolve(__dirname, "../shared"),
      },
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, Content-Type, Authorization",
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
    },
  });
};
