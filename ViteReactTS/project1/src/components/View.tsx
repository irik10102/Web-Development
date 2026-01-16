

interface Prop{
    name:string,
    dept:string,
    email:string
}

const View = (prop:Prop)=>{
    const {name, dept, email} = prop;
    return(
        <>
            <ul>
                <li>Name:{name}</li>
                <li>Dept:{dept}</li>
                <li>Email:{email}</li>
            </ul>
        </>
    )
}

export default View;