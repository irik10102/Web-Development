import { useContext } from "react";
import myContext from "./create";

const Child = ()=>{
    const {msg, obj} = useContext(myContext);
    return (
        <>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>{obj.name}</td>
                </tr>
                <tr>
                    <td>Roll:</td>
                    <td>{obj.roll}</td>
                </tr>
                <tr>
                    <td>Dept:</td>
                    <td>{obj.dept}</td>
                </tr>
            </table>
            
        </>
    )
}

export default Child;