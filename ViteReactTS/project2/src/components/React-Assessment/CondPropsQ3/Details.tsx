interface Prop{
    empDetails:
    {
        name:string,
        email:string,
        dept:string,
        loc:string
    }

}

const Details = (prop:Prop)=>{
    const {empDetails} = prop;

    return(
        <>
            <table className="container">
                <tr>
                    <td>Name:</td>
                    <td>{empDetails.name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{empDetails.email}</td>
                </tr>
                <tr>
                    <td>Department:</td>
                    <td>{empDetails.dept}</td>
                </tr>
                <tr>
                    <td>Location:</td>
                    <td>{empDetails.loc}</td>
                </tr>
            </table>
        </>
    )
}
export default Details;