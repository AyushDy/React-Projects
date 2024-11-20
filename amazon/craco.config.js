module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const svgRuleIndex = webpackConfig.module.rules.findIndex((rule) =>
          rule.test && rule.test.toString().includes('svg')
        );
  
        if (svgRuleIndex !== -1) {
          webpackConfig.module.rules[svgRuleIndex] = {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  throwIfNamespace: false,
                },
              },
            ],
          };
        }
  
        return webpackConfig;
      },
    },
  };
  