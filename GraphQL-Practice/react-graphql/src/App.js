import logo from './logo.svg';
import './App.css';
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import { GetUsers } from './Components/GetUsers';
import { CreateUser } from './Components/CreateUser';

const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`GraphQL error ${message}`);
    });
  }
});
const link = from([
  errorLink, 
  new HttpLink({uri: 'http://localhost:6969/graphql'})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CreateUser />
        <GetUsers />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
