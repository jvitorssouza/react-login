const { alias } = require('react-app-rewire-alias');
const { fixBabelImports } = require('customize-cra');

module.exports = function override(config) {
  alias({
    '~': './src',
  })(config);

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  });

  return config;
};
