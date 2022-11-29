import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import uri from './config/uri';

export default new ApolloClient({
    uri: `${uri}/graphql`,
    cache: new InMemoryCache(),
  });