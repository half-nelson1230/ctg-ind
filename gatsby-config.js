require("dotenv").config()

const myCustomQueries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 900px)',
    md: '(max-width: 1200px)',
    l: '(max-width: 1600px)',
};

module.exports = {
  siteMetadata: {
    title: `Cottage Industry`,
    siteUrl: `https://git.heroku.com/cottage-industry.git`,
    description: `Clothes for the Planet`,
  },
  plugins: [
   {
     resolve: "gatsby-source-shopify",
     options: {
        shopName: `ctg-ind`,
        accessToken: `1178bef5337ace8b6210fbeccbc1cdae`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/Links`,
    },
  },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
     resolve: "gatsby-plugin-web-font-loader",
     options: {
       typekit: {
         id: process.env.TYPEKIT_ID,
       },
     },
   },
  ],
};
