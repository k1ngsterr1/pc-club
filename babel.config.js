module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@app": "./src/app",
            "@assets": "assets",
            "@entities": "./src/entities",
            "@features": "./src/features",
            "@widgets": "./src/widgets",
            "@shared": "./src/shared",
          },
        },
      ],
    ],
  };
};
