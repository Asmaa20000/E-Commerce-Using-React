import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getData= createAsyncThunk('recipy/getData',async function (){
let {data}= await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
return data.recipes
})
let RecipeSlice=createSlice({
name:'recipy',
initialState:{
  recipeList:[],
  isloading: false,
  isErr:null
},
extraReducers:(builder)=>{
builder.addCase(getData.pending,(state, actions)=>{
state.isloading= true;
})
builder.addCase(getData.rejected,(state, actions)=>{
    state.isloading= false;
    state.isErr= actions.payload;
})
builder.addCase(getData.fulfilled,(state, actions)=>{
    state.isloading= false;
    state.recipeList=actions.payload;
})
}

})
 let RecipeReducer= RecipeSlice.reducer;

 export default RecipeReducer;