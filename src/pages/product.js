import React from "react";
import { getApolloClient } from "../../apollo-client";
import { gql } from "@apollo/client";
export default function product({ data }) {
  return <div>product</div>;
}

export async function getStaticProps() {
  const client = getApolloClient();

  const { data } = await client.query({
    query: gql`
      {
        product(id: "the-card-phone-case-copy", idType: SLUG) {
          ... on SimpleProduct {
            id
            name
            salePrice
            content
            regularPrice
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          galleryImages {
            nodes {
              mediaItemUrl
            }
          }
        }
      }
    `,
  });

  const res = {
    ssp: data,
  };
  return {
    props: {
      data: res,
    },
    revalidate: 1,
  };
}
