import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface User{
    nm:string,
    email:string,
    loc:string,
    dp:string
}
const LifeCycleComponent = ()=>{
  const [info, setInfo] = useState<User>({nm:'Sahil', email:'sg@gmail.com', loc:'kolkata', dp:'cse'});
  const refDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(()=>{
    window.alert('My component will load shortly!');
  },[])

  useEffect(()=>{setTimeout(()=>{
    refDiv.current!.innerHTML= `
                                    <ul>
                                        <li key='nm'>Name:${info.nm}</li>
                                        <li key='email'>Email:${info.email}</li>
                                        <li key='loc'>Location:${info.loc}</li>
                                        <li key='dp'>Department:${info.dp}</li>
                                    </ul>
                               `;
  },5000)},[])

   return(
    <>
        <div ref={refDiv}>
            <h3>Please wait for 5 seconds</h3>
        </div>
    </>
   )

}
export default LifeCycleComponent;