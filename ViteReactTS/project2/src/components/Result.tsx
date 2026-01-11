import { useState } from "react";

interface student{
    nm:string,
    roll:number,
    dept:string,
    phy:number,
    chem:number,
    bio:number,
    total:number
}

const Result = ()=>{

        const [stud, setStud] = useState<student>({nm:'',roll:0,dept:'',phy:0,chem:0,bio:0,total:0})
        const [state, setState] = useState(false);

        const update = (e:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value, type} = e.target;
            setStud({...stud,
                [name]: type === "number" ? Number(value):value});
            setState(false);
        }

        
        const report=()=>{
            let tot:number = stud['phy']+stud['chem']+stud['bio'];
            setStud({...stud,['total']:tot})
            setState(true);
        }

        return(
            <>
                <table>
                    <tr>
                        <td>Enter Name:</td>
                        <td><input type="text" name="nm" onChange={update}/></td>
                    </tr>
                    <tr>
                        <td>Roll:</td>
                        <td><input type="number" name="roll" onChange={update}/></td>
                    </tr>
                    <tr>
                        <td>Department:</td>
                        <td><input type="text" name="dept" onChange={update}/></td>
                    </tr>
                    <tr>
                        <td>Physics:</td>
                        <td><input type="number" name="phy" onChange={update}/></td>
                    </tr>
                    <tr>
                        <td>Chemistry:</td>
                        <td><input type="number" name="chem" onChange={update}/></td>
                    </tr>
                    <tr>
                        <td>Biology</td>
                        <td><input type="number" name="bio" onChange={update}/></td>
                    </tr>
                </table>
                <button onClick={report}>Mark Sheet</button>
                <table>
                        {state && <>
                                        <tr>
                                            <td>Name:</td>
                                            <td>{stud['nm']}</td>
                                        </tr>
                                        <tr>
                                            <td>Roll:</td>
                                            <td>{stud['roll']}</td>
                                        </tr>
                                        <tr>
                                            <td>Department:</td>
                                            <td>{stud['dept']}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Marks Obtained:</td>
                                            <td>{stud['total']}</td>
                                        </tr>
                                    </>
                        }
                </table>
            </>
        )
}

export default Result;