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
