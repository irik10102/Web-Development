import { createContext } from "react";


    const mycontext = createContext({msg:'', info:[{nm:'', em:'', dept:''}]});                             //here msg inside createContext({}) is pre-defined.

export default mycontext;