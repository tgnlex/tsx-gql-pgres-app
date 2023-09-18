import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
const port = 4000;
const yoga = createYoga({schema})
const server = createServer(yoga)


server.listen(port, () => {
  console.info(`GraphQL Server is running on http://localhost:${port}/graphql`)
})