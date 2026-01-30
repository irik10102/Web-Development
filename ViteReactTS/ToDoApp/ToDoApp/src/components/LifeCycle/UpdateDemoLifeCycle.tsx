import { useEffect , useState,useRef} from "react";

const UpdateDemoLifeCycle = ()=>{

    const [count, setCount] = useState<number>(0);
    const refD = useRef<HTMLHeadingElement>(null);


    useEffect(()=>{setTimeout(()=>{
        setCount(7);
        refD.current!.innerHTML = `Reference value in ref:${count}`;                //the count = 0 state is locked here. (state closure)
    },5000)},[count])

    return(
        <>
            <h3>Counter value in count:{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <h3 ref={refD}>Reference value in ref:{count}</h3>
        </>
    )
}
export default UpdateDemoLifeCycle;