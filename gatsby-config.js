module.exports = {
  siteMetadata: {
    title: `Tickdays`,
    description: `Track your good days, and do more of the things you want to do with the free Tickdays app`,
    author: `@alexcoady`,
    appStoreUrl: "https://apps.apple.com/gb/app/tickdays/id1511212197",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tickdays",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}
