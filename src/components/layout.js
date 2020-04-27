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
      allMarkdownRemark (sort: {fields: fields___slug order: ASC}) {
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
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} markdowns={data.allMarkdownRemark} />
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
