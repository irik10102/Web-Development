import React from "react"


interface Prop{
    l:number,
    b:number,
    h:number,
    skills:string[]
}

const PropResult = (prop:Prop)=>{
    const {l,b,h,skills} = prop;
    return(
        <ul>
            <li>{l}</li>
            <li>{b}</li>
            <li>{h}</li>
            <li>{skills.join(',')}</li>
        </ul>
    )
}

export default PropResult;