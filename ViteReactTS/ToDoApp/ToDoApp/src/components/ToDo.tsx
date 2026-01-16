import { useState,useRef } from "react";

const ToDo = ()=>{
    const refIn = useRef<HTMLInputElement>(null);
    const [edit_index,setEditIndex] = useState<number>(-1);
    const [nameList, setNameList]   = useState<string[]>([]);

    const add = ()=>{
        const name:string = refIn.current!.value;
        if(edit_index>=0)                                                                        /*Edit*/
        {
            nameList[edit_index] = name;
            setNameList([...nameList]);
            setEditIndex(-1);
        }
        else{                                                                                   /*Add*/
            setNameList([...nameList,name]);
        }
        refIn.current!.value='';
    }

    const del = (i:number)=>{
        nameList.splice(i,1);
        setNameList([...nameList]);

    }

    const edit = (i:number)=>{
        setEditIndex(i);
    }
    return(
        < >
        <div className="container">
            Enter task name:
            <input type="text" ref={refIn}></input>
            <br></br>
            <button onClick={add}>{(edit_index==-1)?"Add":"Edit"}</button>
            <ul>
                {
                    (nameList.length > 0 )?nameList.map((val,ind)=>{
                        return <li>{val}<button onClick={()=>del(ind)}>Delete</button><button onClick={()=>{edit(ind)}}>Edit</button></li>
                    }):<h3>No names added yet!</h3>
                }
            </ul>
        </div>
        </>
    )
}

export default ToDo;
