import { useState , useRef} from "react";
import Details from "./Details";

interface Employee{
    name:string,
    email:string,
    dept:string,
    loc:string
}

const Register = ()=>{

    const [flag, setFlag] = useState<boolean>(false);

    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refDept = useRef<HTMLInputElement>(null);
    const refLoc = useRef<HTMLInputElement>(null);

    const [emp,setEmp] = useState<Employee>({name:'', email:'', dept:'', loc:''});

    
    const add = ()=>{
        let emp1={name:refName.current!.value, email:refEmail.current!.value, dept:refDept.current!.value, loc:refLoc.current!.value};
        setEmp({...emp1});
    }

    return(
        <>
            <div className="container">
                <table>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" ref={refName}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" ref={refEmail}/></td>
                    </tr>
                    <tr>
                        <td>Dept:</td>
                        <td><input type="text" ref={refDept}/></td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td><input type="text" ref={refLoc}/></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{add();setFlag(!flag)}}>{(flag)?"Hide":"Show"}</button></td>
                    </tr>
                </table>
                {(flag)?<Details empDetails={emp}/>:''}
                
            </div>
        </>
    )
}
export default Register;