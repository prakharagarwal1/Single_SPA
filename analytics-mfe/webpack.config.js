const { merge } = require("webpack-merge");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codenv",
    projectName: "analytics-mfe",
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
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  });
};
