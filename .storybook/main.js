module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen'
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const lessRule = {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              // require('postcss-import'),
              require('autoprefixer'),
              require('tailwindcss')('./tailwind.config.js'),

              // require('postcss-preset-env')(),
            ],
          },
        },
        { loader: 'less-loader'},
        
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //     ident: 'postcss',
        //     plugins: [
        //       // require('postcss-import'),
        //       // require('autoprefixer'),

        //       // require('postcss-preset-env')(),
        //     ],
        //   },
        // },

      ],
    }
    config.module.rules.push(lessRule);

    const cssRule = {
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              // require('postcss-import'),
              require('tailwindcss')('./tailwind.config.js'),
              require('autoprefixer'),
              // require('postcss-preset-env')(),
            ],
          },
        },
      ],
    }
    config.module.rules.push(cssRule);

    // Return the altered config
    return config;
  },
}