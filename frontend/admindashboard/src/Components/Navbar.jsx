import { useContext } from "react";
import "../styles/navbar.css"
import { Link,NavLink } from "react-router-dom";
import { employeeContex } from "../contexApi/employeeDataContex";
function Navbar() {
    const {colapsed,setColapsed}=useContext(employeeContex)
    function toggleAside(){
        setColapsed(!colapsed)
    }
    return (  
        <>
            <nav className={colapsed?"nav collapsed":"nav"}>
                <div className="logo">
                    <div className="humberf">
                        <button className="hamburg-icon"
                            onClick={toggleAside}
                        >&#9776;</button>
                    </div>
                    Driftal
                </div>
                <div className="links">
                    <NavLink to='/' className="link">Dashboard</NavLink>
                    <NavLink to="/employees" className="link">Employees</NavLink>
                    <NavLink to="/addemployee" className="link">Add Employee</NavLink>   
                </div>
            </nav>
        </>
    );
}

export default Navbar;