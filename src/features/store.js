import { configureStore } from "@reduxjs/toolkit";
import BacketSlice from "./backet/BacketSlice";
import LikeSlie from "./like/LikeSlie";
import SaleSlice from "./sale/SaleSlice";
import CategorySlice from "./category/CategorySlice";
import UserSlice from "./user/UserSlice";
import ProductSlice from "./products/ProductSlice";

export const store=configureStore({
    reducer:{    
        backet:BacketSlice,
        like:LikeSlie,
        sale:SaleSlice,
        category:CategorySlice,
        user:UserSlice,
        products:ProductSlice
    }
})