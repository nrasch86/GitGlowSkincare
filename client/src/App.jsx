//**The main React component that includes the routing logic. */
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import NavTop from "./components/NavTop";
import Footer from "./components/Footer"

import './App.css'
// import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {


  
  return (
    <ApolloProvider client={client}>
    <div>
      <NavTop />
      <Outlet />
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
