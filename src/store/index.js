import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./modal";
import appeareance from "./appeareance";

const store=configureStore({
    reducer:{
        auth,
        modal,
        appeareance
    }
})

export default store;