interface Stud{
   data:{name:string, email:string}[]
}

const Child = (info:Stud)=>{
    return(
        <>
            <ul>
                {info.data.map((val)=>{
                    return <li>Name:{val.name} Email:{val.email}</li>
                })}
            </ul>
        </>
    )

}

export default Child;