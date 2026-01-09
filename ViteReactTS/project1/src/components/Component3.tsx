import { useState } from "react";

interface EMP{
    id:number,
    name:string,
    email:string,
    skills:string[]

}


const Component2 = ()=>{
    const [empData, setEmpData] = useState<EMP[]>([
        { id:20, name:"Seema", email:"sahilghosh123@gmail.com",skills:['angular', 'react']},

        { id:21, name:"Sahil", email:"sahilghosh123@gmail.com",skills:['angular', 'react', 'java']},
         { id:22, name:"Sahil", email:"sahilghosh123@gmail.com",skills:['angular', 'react', 'php']}

    ]);

    return (
        <>
            <ol>
                {
                    empData.map((val)=>{
                        return <li>ID:{val['id']} Name:{val['name']} Email:{val['email']} Skills:{val['skills'].join(' ')}</li>
                    })
                }
            </ol>
        </>
    )
}

export default Component2;