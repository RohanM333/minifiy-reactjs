module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.js', './public/index.html'],
      safelist: ['safelist-class'], // Add any classes that should not be purged
    }),
  ],
};
