import { useRef,useState  } from "react";


const AddName = ()=>{
    
    const refInput = useRef<HTMLInputElement>(null);
    const [nameList,setNameList] = useState<string[]>([]);
    const [edit_index, setEditIndex] = useState<number>(-1);                                     /*-1 -> Invalid index(ADD) , ANY OTHER NUMBER-> Proper Index(Edit)*/
    
    const add = ():void=>{
        const name = refInput.current!.value;
        if(edit_index>=0){
            nameList[edit_index] = name;
            setNameList([...nameList]);
            setEditIndex(-1);                                                                   /*This will also make the button named "Edit" to "Add"*/
        }
        else{
            setNameList([...nameList, name]);
        }
        refInput.current!.value = '';
        
        
        
    }
    
    const edit = (i:number)=>{
            setEditIndex(i);
    }


    const delnm = (i:number)=>{
        nameList.splice(i, 1);
        setNameList([...nameList]);
    }

   
    return(
        <>
            Enter name:
            <input type="text" ref={refInput}></input>
            <br></br>
            
            <button onClick={add}>{(edit_index >=0)?"EDIT":"ADD"}</button>
            <ul>
                {
                    (nameList.map((val,ind)=>{
                        return <li>{val}<button onClick={()=>{edit(ind)}}>Edit</button><button onClick={()=>delnm(ind)}>Delete</button></li>
                    }))
                }
            </ul>
               
                    
                
        </>
    )
}

export default AddName;