import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        siteDescription: description
        author
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDescription, siteTitle } = site.siteMetadata
  return (
    <Helmet title={`${title} | ${siteTitle} `} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

export default SEO
