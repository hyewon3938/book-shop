module.exports = function (env) {
  console.log(env?.dev);
  if (env?.dev) return require(`./webpack.dev.js`);
  return require(`./webpack.prod.js`);
};
