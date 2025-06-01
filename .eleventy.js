module.exports = function(eleventyConfig) {
  // Copy images, CSS, JS, admin, and static folders directly to the output
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/media");

  return {
    dir: {
      input: "src",     // Source files here
      includes: "_includes", // Includes directory
      data: "_data",
      output: "_site"   // Built site output here
    }
  };
};
