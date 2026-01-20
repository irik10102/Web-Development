interface props{
   data1:{name:string, email:string}[]
}

const Child = (info:props)=>{
    return(
        <>
            <ul>
                {info.data1.map((val)=>{
                    return <li>Name:{val.name} Email:{val.email}</li>
                })}
            </ul>
        </>
    )

}

export default Child;