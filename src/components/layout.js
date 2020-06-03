/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      },
      houses: allMarkdownRemark (
        sort: {fields: fields___slug order: ASC},
        filter: {
          fields: {
            slug: {regex: "/\/houses*/"}
          }
        }) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date(formatString: "DD MMMM, YYYY")
                      link
                      builtArea
                      usedArea
                      livingArea
                    }
                    fields {
                      slug
                    }
                    excerpt
                  }
                }
              },
    studies: allMarkdownRemark (
        sort: {fields: fields___slug order: ASC},
        filter: {
          fields: {
            slug: {regex: "/\/studies*/"}
          }
        }) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date(formatString: "DD MMMM, YYYY")
                      link
                      builtArea
                      usedArea
                      livingArea
                    }
                    fields {
                      slug
                    }
                    excerpt
                  }
                }
              }
    ideas: allMarkdownRemark (
        sort: {fields: fields___slug order: ASC},
        filter: {
          fields: {
            slug: {regex: "/\/ideas*/"}
          }
        }) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date(formatString: "DD MMMM, YYYY")
                      link
                    }
                    fields {
                      slug
                    }
                    excerpt
                  }
                }
              }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} data={data} />
      <main>
        <Container className="p-3">{children}</Container>
      </main>
      <footer className="footer mt-auto py-3 text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
