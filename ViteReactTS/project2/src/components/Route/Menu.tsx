import { Link } from "react-router-dom";
const Menu = ()=>{
    return(
        <>
            <div className = 'container'>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link' to='/tab1'>Tab-1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/tab2'>Tab-2</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Menu;