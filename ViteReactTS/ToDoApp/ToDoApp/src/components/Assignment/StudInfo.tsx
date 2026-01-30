import { useState , useRef, useEffect} from "react";
import StudList from "./StudList";

interface Student{
    nm:string,
    dept:string
}

const StudInfo = ()=>{
    const [studArray, setStudArray] = useState<Student[]>([]);
    const refName = useRef<HTMLInputElement>(null);
    const refDept = useRef<HTMLInputElement>(null);

    const add = ()=>{
        let nmFetched:string = refName.current!.value;
        let deptFetched:string = refDept.current!.value;

        const newStud:Student = {nm:nmFetched, dept:deptFetched};

        setStudArray([...studArray, newStud ]);
    }
    return(
        <>
                <table>
                    <tr>
                        <td >Name:</td>
                        <td><input type="text" ref={refName}/></td>
                    </tr>
                    <tr>
                        <td>Department:</td>
                        <td><input type="text" ref={refDept}/></td>
                    </tr>
                    <tr>
                        <td><button type="button" onClick={add}>Add</button></td>
                    </tr>

                </table>
            
                {
                
                    (studArray.length > 0)?<StudList studData={studArray}/>: 'No Names Added yet'
                
                }
            
        </>
    )
}
export default StudInfo;