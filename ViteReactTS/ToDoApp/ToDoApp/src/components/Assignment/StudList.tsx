import { useRef,useEffect,useState } from "react";


interface Prop{
    studData:{nm:string, dept:string}[];
}
const StudList = (props:Prop)=>{
    const {studData} = props;
    const refDiv = useRef<HTMLDivElement>(null);
    const [count,setCount] = useState<number>(5);


    useEffect(()=>{
        if(count!=0)setInterval(()=>{refDiv.current!.innerHTML=`Please wait for ${count} seconds...`;setCount(count-1)},1000);
    },[count])

    return( <div ref={refDiv}>
             <ul>{studData.map((student)=>{return <li>Name:{student.nm}|Department:{student.dept}</li>})}</ul>
        </div>)
}
export default StudList;

