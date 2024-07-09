const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  // Navigation plugin.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Shortcode for year.
  eleventyConfig.addShortcode('year', () => {
    return `${new Date().getFullYear()}`;
  });

  // Passthrough for assets.
  [
    'src/css',
    'src/images/',
    'src/js/',
    {'src/images/favicon': '/'}
  ].forEach(path => {
    eleventyConfig.addPassthroughCopy(path);
  });

  // Template formats and directories.
  return {
    templateFormats: ["html", "liquid", "njk"],
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes'
    }
  };
};
