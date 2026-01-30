import { useEffect, useLayoutEffect,useState ,useRef} from "react";

const DisplayAfter5Sec = ()=>{

    const [count,setCount] = useState<number>(5);
    const refH = useRef<HTMLHeadingElement>(null);

    useEffect(()=>{
        if(count>0) setInterval(()=>{setCount(count-1)},1000);

        else return()=>{refH.current!.innerText=`Welcome to my Component`}
    },[count])


    return(
        <>
            <h3 ref={refH} className="text text-bg-light">Please wait for {count} seconds...</h3>
        </>
    )
}
export default DisplayAfter5Sec;