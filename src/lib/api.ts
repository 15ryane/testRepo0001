import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { http } from "./common";

export const gqlClient = new ApolloClient({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`
  },
  uri: "http://localhost:9000/graphql/playground"
});

// Add GQL queries here.

export const queries = {};

// Add REST API calls here
export const exampleQuery = () => {
  return http({
    endpoint: `/test/test`,
    method: "GET",
    query: null,
    body: null,
    withAuth: true
  });
};
