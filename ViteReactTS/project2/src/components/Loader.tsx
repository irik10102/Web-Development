import { useState } from "react";

import Lifeex4 from "./Lifeex4";


const Loader = ()=>{
    const [show, setShow] = useState<boolean>(false);
    return(
        <><button onClick={()=>{setShow(!show)}} className="btn btn-primary">{(show)?"Hide":"Show"}</button>
            {show && <Lifeex4/>}
        </>
    )
}

export default Loader;