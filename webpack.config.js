module.exports = env => {
  const webpackEnv = env.prod ? 'prod' : 'dev';
  return require(`./webpack.${webpackEnv}.js`);
};
