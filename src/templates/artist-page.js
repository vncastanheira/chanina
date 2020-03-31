import React from "react";
import Layout from "../components/Layout";

export const ArtistPage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <Layout>
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
        {page.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  );
};

export default ArtistPage;

export const pageQuery = graphql`
  query ArtistById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        name
      }
    }
  }
`;
