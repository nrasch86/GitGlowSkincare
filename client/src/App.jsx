//**The main React component that includes the routing logic. */
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
    const [preload, setPreload] = useState(true);
  
    setTimeout(function () {
      setPreload(false);
    }, 2000);
  
    if (preload) {
      return (
        <>
          <div className="preload">
            <h1>
              <strong>Git</strong>
              <i>Glow</i>
            </h1>
            <p>─────</p>
            <Spinner animation="grow" />
          </div>
        </>
      );
    }

    return (

    <>
    <div ClassName="d-flex">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>} ></Route>
          <Route path="/Signup" element={<Signup/>} ></Route>
          <Route path="/Profile" element={<Profile/>} ></Route>
        </Routes>
    </div>
     </>
    );
}

export default App;