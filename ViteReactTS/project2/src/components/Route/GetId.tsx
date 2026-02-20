import { useParams } from "react-router-dom";

const GetId = ()=>{

    const {userId} = useParams();
    return(
        <>
            <div className="container">
                <h3>Required id:{userId}</h3>
            </div>
        </>
    )
}
export default GetId;