const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], { target: "serverless"});

module.exports = {
  reactStrictMode: true,
  domains:['lh3.googleusercontent.com','images.unsplash.com','firebasestorage.googleapis.com','firebasestorage.googleapis.com/v0/b/blogyan-194a0.appspot.com'],
  images: {
    loader: 'akamai',
    path: 'https://blogyan-194a0.web.app/',
  },
  trailingSlash: true,
};
