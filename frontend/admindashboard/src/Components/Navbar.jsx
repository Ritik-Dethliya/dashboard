import "../styles/navbar.css"
import { Link,NavLink } from "react-router-dom";
function Navbar() {

    return (  
        <>
            <nav>
                <div className="logo">
                    Employee
                </div>
                <div className="links">
                    <NavLink to='/' className="link">Dashboard</NavLink>
                    <NavLink to='/anaylsis' className="link">Anaylsis</NavLink>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;