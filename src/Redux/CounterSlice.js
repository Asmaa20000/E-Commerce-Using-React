import { createSlice } from "@reduxjs/toolkit";

let CounterSlice=createSlice({
name:'counter',
initialState:{
    name:'asmaa',
    age:22,
    salary:200000,
    counter:0
},
reducers:{
    changename:()=>{
        console.log('hi');
    },
    changeage:()=>{
        console.log('hi');
    },
    changeCounter:(state,actions)=>{
state.counter=actions.payload
console.log(actions);
    }
}

})
let CounterReducer= CounterSlice.reducer; // عشان افهمه اني عندي ريديوسر ممكن اسميه باسم مختلف عادي
export default CounterReducer;
export let {changeage,changename, changeCounter}= CounterSlice.actions;