import myContext from "./create";
import Child from "./Child";
const Parent = ()=>{

    <myContext.Provider value = {{msg:'Hey Just testing', obj:{name:'Sahil', roll:'C91/MCA/242026', dept:'AKCSIT'}}}>
        <Child/>
    </myContext.Provider>
}

export default Parent;