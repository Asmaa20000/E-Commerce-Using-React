import { createContext, useState } from "react";

 export let counterContext= createContext();
 export default function CounterContextProvider(props){
  
    const[counter, setcounter]=useState(0);
    function changeCounter(){
        setcounter(Math.random());
    }
   
    return <counterContext.Provider value={{counter, changeCounter}}>
{props.children}
    </counterContext.Provider>

}