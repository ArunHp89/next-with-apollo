import React from "react";
import { getApolloClient } from "../../apollo-client";
import { GET_HEADER } from "../../lib/queryes/Header";
export default function menus({ data }) {
  return <div>menus</div>;
}
export async function getStaticProps() {
  const client = getApolloClient();

  const { data } = await client.query({
    query: GET_HEADER,
  });
  const res = {
    menus: data,
  };
  return {
    props: {
      data: res,
    },
  };
}
