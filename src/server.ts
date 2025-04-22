import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

const app = express();

// GraphQL 엔드포인트 설정
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // GraphQL Playground 활성화
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
