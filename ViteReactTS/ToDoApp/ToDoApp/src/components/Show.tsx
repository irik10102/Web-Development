interface Prop{

    info:string[],
    del:(ind:number)=>void

}



const Show = (props:Prop)=>{
    const {info, del} = props;

    return(
        <>
            <ul>
                {info.map((val,i)=>{
                    return <li>Name:{val} <button onClick={()=>del(i)}>DELETE</button></li>;
                })}
            </ul>
        </>
    )
}
export default Show;