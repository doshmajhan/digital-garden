module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `Digital Garden`,
    author: "doshmajhan",
    description: "A collection of my notes",
    siteUrl: "https://garden.doshmajhan.com/",
    social: [
      {
        name: "github",
        url: "https://github.com/doshmajhan",
      },
    ],
  },
}
