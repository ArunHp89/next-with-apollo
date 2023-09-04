import { useRouter } from "next/router";

import { gql, useMutation } from "@apollo/client";
import { getApolloClient } from "../../../apollo-client";
import { lazy, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import client from "../../../apollo-client-mutation";
import SingleProductRightArea from "../components/SingleProductRightArea";
import { useCart } from "../components/CartContext";
export default function Page({ data, params }) {
  const productId = data.ssp.product.productId;
  const router = useRouter();
  const { cartDispatch } = useCart();
  const images = data.ssp.product.galleryImages.nodes.map((object) => {
    return { original: object.mediaItemUrl, thumbnail: object.mediaItemUrl };
  });
  // Fetch product details

  const [addToCart] = useMutation(ADD_TO_CART_MUTATION);

  const handleAddToCart = () => {
    if (data && data.ssp.product) {
      const productId = data.ssp.product.productId;
      cartDispatch({
        type: "ADD_TO_CART",
        payload: {
          productId: data.ssp.product.id,
          name: data.ssp.product.name,
          price: data.ssp.product.price,
        },
      });
      addToCart({
        variables: {
          input: {
            productId: productId,
          },
        },
      })
        .then((result) => {
          console.log("Added to cart:", result);
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    }
  };

  const product = data.ssp.product;
  return (
    <>
      <p>Post: {router.query.slug}</p>
      <div className="wrapper"></div>
      <div className="bg-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <main className="w-full flex flex-col lg:flex-row">
            <ImageSlider images={images} lazy={lazy} />
            <SingleProductRightArea
              handleAddToCart={handleAddToCart}
              data={data}
              useState={useState}
            />
          </main>
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const client = getApolloClient();
  const { data } = await client.query({
    query: gql`
      {
        products(first: 1000) {
          nodes {
            ... on SimpleProduct {
              slug
            }
          }
        }
      }
    `,
  });
  const slug = data?.products?.nodes?.map((item) => {
    return {
      params: {
        slug: item.slug.toString(),
      },
    };
  });

  return {
    paths: slug,
    fallback: false,
  }; //indicates the type of fallback
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;
  const client = getApolloClient();

  const { data } = await client.query({
    query: gql`
      {
        product(id: "${slug}", idType: SLUG) {
          ... on SimpleProduct {
            id
            name
            salePrice
            content
            regularPrice
            productId
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
const ADD_TO_CART_MUTATION = gql`
  mutation AddToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        product {
          node {
            id

            name
          }
        }
      }
    }
  }
`;
