import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = ({ siteTitle, markdowns }) => (
  
  <Navbar expand="lg">
    <Navbar.Brand as={Link} to="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      {
        markdowns.edges.map(({ node }) => (
          <NavItem href={node.fields.slug} key={node.fields.slug + "-id"}>
            <Nav.Link as={Link} activeClassName="active" to={node.fields.slug}>{node.frontmatter.title}</Nav.Link>
          </NavItem>
        ))
      }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;