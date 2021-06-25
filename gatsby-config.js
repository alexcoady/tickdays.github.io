module.exports = {
  siteMetadata: {
    title: `Tickdays`,
    description: `Track your good days, and do more of the things you want with the free Tickdays app`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-image`,
      breakpoints: [576, 768, 992],
      placeholder: "none",
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-DKYX38T0YG"],
      },
    },
  ],
}
