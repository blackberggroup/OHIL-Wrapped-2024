module.exports = function (eleventyConfig) {
    // Pass through the assets folder
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/images");
  
    // Return the configuration object
    return {
      dir: {
        input: "src",       // Source files
        output: "_site",    // Output directory
      },
    };
  };
  