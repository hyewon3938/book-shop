module.exports = function (env) {
  if (env === "dev") return require(`./webpack.dev.js`);
  return require(`./webpack.prod.js`);
};
