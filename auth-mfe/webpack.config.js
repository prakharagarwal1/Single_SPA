const { merge } = require("webpack-merge");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codenv",
    projectName: "auth-mfe",
    webpackConfigEnv,
    argv,
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
    module: {
      rules: [
        // other rules

        {
          test: /\.scss$/,
          use: [
            "style-loader", // Injects styles into the DOM
            "css-loader", // Resolves CSS imports and dependencies
            "sass-loader", // Compiles SCSS to CSS
          ],
        },
      ],
    },
  });
};
