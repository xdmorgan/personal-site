module.exports = {
  plugins: {
    stylelint: {
      config: {
        extends: 'stylelint-config-standard',
        ignoreFiles: ['./node_modules/**'],
      },
    },
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-selectors': true,
      },
    },
  },
}
