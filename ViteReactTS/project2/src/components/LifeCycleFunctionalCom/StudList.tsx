import { useEffect, useLayoutEffect,useRef,useState } from "react";

interface Prop{
    studArray:{nm:string, dept:string}[];
}



const StudList = (props:Prop)=>{
    const {studArray } = props;
    //const refH = useRef<HTMLHeadingElement>(null);
    const [flag,setFlag] = useState<boolean>(false);

  

   useLayoutEffect(()=>{
    setFlag(false);
    setTimeout(()=>{setFlag(true);},5000);
   },[studArray])


    return(
        <>
            
            {(flag)? studArray.map((student,index)=>{return <li key={index}>Name:{student.nm}|Department:{student.dept}</li>}):'Please wait for 5 seconds'}
        </>
    )
}

 export default StudList;