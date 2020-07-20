/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Portfolio',
    author: 'michzuerch',
    description: 'Personal portfolio',
    siteUrl: 'https://michzuerch.github.io/',
    social: [
      {
        name: 'github',
        url: 'https://github.com/michzuerch',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'src',
    //     path: `${__dirname}/src/`,
    //     ignore: ['**/.*'],
    //   },
    // },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
