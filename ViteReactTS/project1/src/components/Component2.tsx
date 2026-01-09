import { useState } from "react";


interface User{

    name:string,
    age:number,
    email:string,
    skills:string[],
    dp:string
}
 const Component2 = ()=>{
    const [info, setInfo] = useState<User>({
        name:"Sahil",
        age:23,
        email:"sahilghosh10102@gmail.com",
        skills:['HTML', 'CSS', 'Bootstrap', 'JS', 'TS', 'React'],
        dp:'IT'
    })

    const valupd = ()=>{
    setInfo({...info, age:25});
}

    return(
        <>
            <ul>
                <li>Name:{info.name}</li>
                <li>Age:{info.age}</li>
                <li>Email:{info.email}</li>
                <li>Skills:{info.skills.join(" ,")}</li>
                <li>Department:{info.dp}</li>
            </ul>
            <br>
            </br>
            <button onClick={valupd}>UPDATE!</button>
        </>
    )
}


export default Component2;