const myCustomQueries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 900px)',
    md: '(max-width: 1200px)',
    l: '(max-width: 1600px)',
};

module.exports = {
  plugins: [
  //  {
    //  resolve: "gatsby-source-shopify",
      //options: {
        //shopName: "CTG_IND",
        //accessToken: "",
    //  },
  //  },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
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
