/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  config.resolve.fallback = {
    fs: false,
    tls: false,
    net: false,
    "stream": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    os: false,
  }

  return config
}
