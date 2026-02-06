
import { useRef, useState } from "react";
interface Student{
    name:string,
    dept:string,
    phy:number,
    chem:number,
    bio:number, 
    total:number

}

const MarksCalQ1 = ()=>{
    const refName = useRef<HTMLInputElement>(null);
    const refDept = useRef<HTMLInputElement>(null);

    //Marks - References
    const refPhysics = useRef<HTMLInputElement>(null);
    const refChemistry = useRef<HTMLInputElement>(null);
    const refBiology = useRef<HTMLInputElement>(null);

    //Array of objects
    const [studentArray, setStudentArray] = useState<Student[]>([]);

    //Adding Function
    const add = ()=>{
        const nm:string = refName.current!.value;
        const dt:string = refDept.current!.value;
        const phyM:number = Number(refPhysics.current!.value);
        const chemM:number = Number(refChemistry.current!.value);
        const bioM:number = Number(refBiology.current!.value);

        const tot:number = phyM + bioM + chemM;

        const newStudent = {name:nm , dept:dt, phy:phyM, chem:chemM, bio:bioM ,total:tot};
        setStudentArray([...studentArray , newStudent]);
        console.log(studentArray);
    }
        


    return(
        <>
            <table className="container mt-5 me-5">
                <tr>
                    <td>Student Name:</td>
                    <td><input type="text" ref={refName}/></td>
                </tr>
                <tr>
                    <td>Department:</td>
                    <td><input type="text" ref={refDept}/></td>
                </tr>
                <tr>
                    <td>Physics Marks:</td>
                    <td><input type="number" ref={refPhysics}/></td>
                    <td>Chemistry Marks:</td>
                    <td><input type="number" ref={refChemistry}/></td>
                    <td>Biology:</td>
                    <td><input type="number" ref={refBiology}/></td>
                </tr>
                <br></br>
                <tr>
                    <td><button className="btn btn-primary" onClick={add}>Add</button></td>
                </tr>
            </table>
            {(studentArray.length>0)?
            <table className="container">
                <tr>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Total Marks</th>
                </tr>
                {studentArray.map((stud, index)=>{
                    return <tr key={index}>
                        <td>{stud.name}</td>
                        <td>{stud.dept}</td>
                        <td>{stud.total}</td>
                    </tr>
                })}
            </table>
            :<h5>No Student Added Yet</h5>}

        </>
    )
}
export default MarksCalQ1;