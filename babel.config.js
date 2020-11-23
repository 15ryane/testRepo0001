module.exports = (api) => {
  return {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            node: "current"
          }
        }
      ],
      "@babel/preset-typescript",
      "@babel/react"
    ],
    plugins: [
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "@babel/plugin-transform-runtime"
    ]
  };
};
