const loaderUtils = require('loader-utils');
const getI18nBlock = require('./utils/get-i18n-block.js');

module.exports = function (source) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this);

  // 通过 this.callback 告诉 Webpack 返回的结果
  this.callback(null, source, sourceMaps);

  // 当你使用 this.callback 返回内容时，该 Loader 必须返回 undefined，
  // 以让 Webpack 知道该 Loader 返回的结果在 this.callback 中，而不是 return 中
  return;
  // return source;
};
