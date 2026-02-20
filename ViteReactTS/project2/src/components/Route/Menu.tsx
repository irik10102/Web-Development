import { useState } from "react";
import { Link } from "react-router-dom";

interface stud{
    uid:number,
    nm:string,
    age:number,
    dp:string,
    em:string
}

const Menu = ()=>{
    const [student, setStudent] = useState<stud>({uid:1, nm:'Sahil', age:24, dp:'IT', em:'sahilghosh10102@gmail.com'})
    return(
        <>
            <div className = 'container'>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/tab1'>Tab-1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/tab2'>Tab-2</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to={`/view/${student.uid}`}>Tab3</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Menu;