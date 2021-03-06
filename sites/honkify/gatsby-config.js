module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-docs',
      options: {
        basePath: '/docs',
        useExternalMDX: true,
      },
    },
  ],
};
