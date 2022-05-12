const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, '.src/'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@enums': path.resolve(__dirname, './src/enums'),
      '@types': path.resolve(__dirname, './src/types'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@store': path.resolve(__dirname, './src/store'),
      '@hooks': path.resolve(__dirname, './src/hooks')
    }
  }
};
