import { useLayoutEffect } from "react";

const LifeCycle = ()=>{

    useLayoutEffect(()=>{                   //In Mounting stage , prior to render

        window.alert('Loading Stage');

    },[])


    return(
        <>
            <h1 style={{textAlign:'center'}}>Welcome to My Component</h1>
        </>
    )

}

export default LifeCycle;