module.exports = {
  siteMetadata: {
    title: `Ryan Kegerreis | Portfolio`,
    description: `Ryan Kegerreis is a Software Developer in Fort Lauderdale, Florida.`,
    author: `Ryan Kegerreis`,
  },
  plugins: [
    // Note: CSP and other HTTP security headers should be configured at the hosting/CDN/server level.
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Kegerries`,
        short_name: `Ryan Kegerries`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
