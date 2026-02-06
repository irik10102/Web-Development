import { useState,useRef } from "react";

interface employees{
    id:number,
    name:string,
    loc:string,
    dept:string,
    gen:string,
    desig:string
}
const ExactSearchQ2 = ()=>{
    const refLoc = useRef<HTMLInputElement>(null);
    const refDes = useRef<HTMLInputElement>(null);

    const [resultsOnly, setResultsOnly] = useState<employees[]>([]);

    const empdata:employees[] = [
                    {id:1, name:'Sahil', loc:'kolkata', dept:'IT' , gen:'M', desig:'SDE-1' },
                    {id:2, name:'Sohail', loc:'mumbai', dept:'HR' , gen:'M', desig:'Manager' },
                    {id:3, name:'Simran', loc:'punjab', dept:'finance' , gen:'F', desig:'Accountant' },
                    {id:4, name:'Soumili', loc:'kolkata', dept:'IT' , gen:'F', desig:'SDE-1' }
    ];


    const search = ()=>{
        const loc:string = (refLoc.current!.value).toLocaleLowerCase();
        const desig:string = refDes.current!.value;

        let result:employees[] = empdata.filter((emp)=>{
            if(emp.loc == loc && emp.desig == desig)
                return emp;
        })
        console.log(result);
        setResultsOnly([...result]);
    }
    return(
        <>
            <table className='container mt-5'>
                <tr>
                    <td>Location:</td>
                    <td><input type="text" ref={refLoc}/></td>
                    <td>Designation:</td>
                    <td><input type="text" ref={refDes}/></td>
                </tr>
                <br></br>
                <tr>
                    <td><button onClick={search} className="btn btn-primary">Search</button></td>
                </tr>
            </table>
            {(resultsOnly.length > 0)?
            <table className="container mt-5">
                {resultsOnly.map((emp,index)=>{
                    return <tr key={index}>
                                <td>ID:{emp.id}</td>
                                <td>Name:{emp.name}</td>
                            </tr>
                })}

            </table>
            :<h5 className="text-center">Nothing to search yet</h5>}
        </>
    )
}
export default ExactSearchQ2;