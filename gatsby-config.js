module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipes",
    description: "Nice and clean recipes site",
    author: "@dejanmarkovic",
    person: { name: "Dejan", age: 35 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Dejan", age: 35 },
      { name: "Sara", age: 6 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
