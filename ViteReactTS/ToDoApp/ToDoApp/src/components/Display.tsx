

interface Prop{
    count:number,
    dinc:()=>void,
    ddec:()=>void,
}



const Display = (info:Prop)=>{

    const {count, dinc, ddec} = info;

    return(
        <>
            Count:{count}
            <br></br>
            <button onClick={dinc}>+</button>
            <br></br>
            <button onClick={ddec}>-</button>
        </>
    )
}
export default Display;