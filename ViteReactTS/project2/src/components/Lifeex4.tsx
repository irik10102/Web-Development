import {useState,useRef,useEffect, useLayoutEffect} from 'react'; 

const Lifeex4=()=>{
     const[count,setCount]=useState<number>(5); 
     const ref1=useRef<HTMLHeadingElement>(null);  

     useLayoutEffect(()=>{                                              //Mount
        alert('1:LayoutEffect');
     },[])
     
     /*useEffect(()=>{                                                    //After render in mounting stage & component updation
        if(count>0) 
        {
           alert("Component Updating")
            setTimeout(() => {
                setCount(count-1);
            },1000);
        }
        else 
        {
            ref1.current!.innerHTML="Time is up..!";
        }
     },[count])*/

     useEffect(()=>{                                                   //Unloading stage
        return ()=>{
            alert('2:Return of Effect...')
        }
     },[])
     
    return(
        <>
           <h3 ref={ref1}>Plz wait for {count} sec...!</h3>
        </>
    )
}

export default Lifeex4;