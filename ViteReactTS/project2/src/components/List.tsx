interface Prop{
   data:{nm:string, em:string}[]
}

const List = (props:Prop)=>{
    return(
        <>
            {
                props.data.map((val)=>{
                    return <li>Name:{val.nm} Email:{val.em}</li>
                })
            }
            
        
        </>
    )
        
}

export default List;