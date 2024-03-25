import React from "react";
import ReactDom from "react-dom";
import Main from "./main";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer, { productsFetch } from "./utils/productSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
    },
})

store.dispatch(productsFetch())

ReactDom.render(
    <React.StrictMode>
        <Provider store = {store}>
             <Main />
        </Provider>
        
    </React.StrictMode>,
    document.getElementById("root")
)