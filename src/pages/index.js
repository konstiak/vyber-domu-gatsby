import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import JSONData from "./index.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Konštiakovci" />
    {
      JSONData.map(par => 
        <Jumbotron>
          <h3>{par.title}</h3>
          <ul>
          {
            par.notes.map(note => <li>{note}</li>)
          }
          </ul>
        </Jumbotron>
      )
    }
  </Layout>
);

export default IndexPage;
