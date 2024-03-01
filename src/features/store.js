import { configureStore } from "@reduxjs/toolkit";
import FirstSlice from "./FirstSlice";

export const store=configureStore({
    reducer:{    
        todo:FirstSlice
    }
})