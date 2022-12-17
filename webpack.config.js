// The base directory that we want to use
const baseDirectory = "dist";

module.exports = {
  // The current mode, defaults to production
  mode: "development",

  // The entry points ("location to store": "location to find")
  entry: {
    "public/javascripts/main": [`./${baseDirectory}/public/typescripts/main`],
    // "other output points" : ["other entry point"]
  },

  // Used for generating source maps (used for debugging)
  devtool: "eval-source-map",
  resolve: {
    fallback: {
      path: false,
      fs: false,
    },
  },
  // The location where bundle are stored
  output: {
    filename: "[name].js",
  },
};
