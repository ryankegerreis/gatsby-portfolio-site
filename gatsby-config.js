module.exports = {
  siteMetadata: {
    title: `Ryan Kegerreis`,
    description: `Ryan Kegerreis is a software developer based in Fort Lauderdale, Florida. Explore his web development work, skills, and projects.`,
    author: `Ryan Kegerreis`,
    jobTitle: `Software Developer`,
    siteUrl: `https://ryankegerreis.com`,
    social: {
      github: `https://github.com/ryankegerreis`,
      linkedin: `https://www.linkedin.com/in/ryankegerreis/`,
    },
  },
  plugins: [
    // Note: CSP and other HTTP security headers should be configured at the hosting/CDN/server level.
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Kegerreis`,
        short_name: `Ryan Kegerreis`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ path }) => ({ url: path }),
      },
    },
  ],
}
