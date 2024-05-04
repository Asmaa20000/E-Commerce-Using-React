import { createContext, useState } from "react";

export let userContext= createContext();
export default function UserContextProvider(myprops){
const[usertoken, settoken]=useState(null);
return <userContext.Provider value={{usertoken, settoken}}>
{myprops.children}
</userContext.Provider>
}
