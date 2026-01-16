import { useState } from "react";
import PropResult from "./PropResult";

interface Dim{
    len:number,
    bred:number,
    hgt:number,
    skills:string[]
}

const Dimension=()=>{
    const[info,setInfo] = useState<Dim>({len:10,bred:5,hgt:15,skills:['Typescript', 'React']});

    return(
        <>
            <PropResult
                l = {info.len}
                b = {info.bred}
                h = {info.hgt}
                skills={info.skills}
            />
        </>
    )
}

export default Dimension;