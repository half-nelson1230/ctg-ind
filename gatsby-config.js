module.exports = {
  siteMetadata: {
    title: "Ctg_Ind",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "CTG_IND",
        accessToken: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
