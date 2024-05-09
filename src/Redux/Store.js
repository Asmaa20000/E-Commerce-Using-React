import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import RecipeReducer from "./RecipeSlice";
export  let store=configureStore({
reducer:{
    counterData:CounterReducer,
    recipeData:RecipeReducer
}
})