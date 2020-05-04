import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { Jumbotron, Table, Row, Col, Container } from "react-bootstrap"

export default ({ data }) => {
  const params = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const fullSize = data.images.edges.map((edge) => edge.node.childImageSharp.fluid.src)
  const thumbs = data.images.edges.map((edge) => edge.node.childImageSharp.fluid)
  return (
    <Layout>
      <div>
        <Container>
          <Row>
            <Col><h1>{params.title}</h1></Col>
            <Col>
            <p className="text-right"><a href={data.markdownRemark.fields.editLink} target={"_blank"} rel="noopener noreferrer">Edit </a>
            | <a href={data.markdownRemark.fields.deleteLink} target={"_blank"} rel="noopener noreferrer"> Delete</a>
            </p>
            </Col>
          </Row>
        </Container>
        
        
        
        <Gallery images={fullSize} thumbs={thumbs} imgClass="rounded" />
        <Container className="mt-5">
          <Row>
            <Col>
              <Jumbotron>
                <Table>
                  <tbody>
                    <tr><td>Odkaz</td><td><a href={params.link} target={"_blank"} rel="noopener noreferrer">Link</a></td></tr>
                    <tr><td>Úžitková plocha</td><td>{params.usedArea} m<sup>2</sup></td></tr>
                    <tr><td>Obytná plocha</td><td>{params.livingArea} m<sup>2</sup></td></tr>
                    <tr><td>Zastavaná plocha</td><td>{params.builtArea} m<sup>2</sup></td></tr>
                  </tbody>
                </Table>
              </Jumbotron>
            </Col>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        usedArea
        livingArea
        builtArea
      }
      fields {
        deleteLink
        editLink
      }
    }
    images: allFile (filter: {
      relativeDirectory: {regex: $slug}
      extension: { regex: "/(jpg)|(png)|(jpeg)/" }
    }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1800 quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`