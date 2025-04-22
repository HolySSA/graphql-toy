import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello, GraphQL!",
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
});
