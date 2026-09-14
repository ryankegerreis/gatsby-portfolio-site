/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, noIndex, pathname, title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          jobTitle
          siteUrl
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const pageTitle = title || site.siteMetadata.title
  const canonicalUrl = new URL(pathname, site.siteMetadata.siteUrl).toString()
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.siteMetadata.author,
    url: site.siteMetadata.siteUrl,
    jobTitle: site.siteMetadata.jobTitle,
    sameAs: [
      site.siteMetadata.social.github,
      site.siteMetadata.social.linkedin,
    ],
  }

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {!noIndex ? (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      ) : null}
      {meta.map((attributes, index) => (
        <meta key={index} {...attributes} />
      ))}
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  noIndex: false,
  pathname: `/`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  noIndex: PropTypes.bool,
  pathname: PropTypes.string,
  title: PropTypes.string,
}

export default Seo
