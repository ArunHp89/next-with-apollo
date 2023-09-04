import React from "react";
import { getApolloClient } from "../../../apollo-client";
import Link from "next/link";
import { gql } from "@apollo/client";
export default function index({ data }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.products?.products?.nodes?.map((product, index) => {
            return (
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.featuredImage.node.mediaItemUrl}
                    alt={product.featuredImage.node.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`collection/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.regularPrice}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const client = getApolloClient();

  const { data } = await client.query({
    query: gql`
      {
        products(first: 1000) {
          nodes {
            title
            ... on SimpleProduct {
              id
              name
              slug
              price
              regularPrice
              salePrice
              dateOnSaleFrom
              dateOnSaleTo
              featuredImage {
                node {
                  mediaItemUrl
                  title
                }
              }
            }
          }
        }
      }
    `,
  });

  const res = {
    products: data,
  };
  return {
    props: {
      data: res,
    },
    revalidate: 1,
  };
}
