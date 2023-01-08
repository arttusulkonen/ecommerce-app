import { gql } from '@apollo/client';

export const GET_ALL_CARDS = gql`
  query GetAllCards {
    products {
      edges {
        node {
          content
          title
          uri
          product {
            productPrice
            productId
          }
          slug
          featuredImage {
            node {
              altText
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_SINGLE_CARD = gql`
  query GetSingleCard($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      title
      content
      product {
        productId
        productPrice
      }
      slug
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
