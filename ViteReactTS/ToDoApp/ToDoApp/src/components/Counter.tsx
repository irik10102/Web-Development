import {useState} from 'react';
import Display from './Display';


const Counter = ()=>{

    const [counter, setCounter] = useState<number>(0);
    
    const inc =()=>{
        setCounter(counter+1);
    }

    const dec = ()=>{
        setCounter(counter-1);
    }
    return(
        <>
            <Display count={counter} dinc={inc} ddec={dec}></Display>
        </>
    )
}

export default Counter;