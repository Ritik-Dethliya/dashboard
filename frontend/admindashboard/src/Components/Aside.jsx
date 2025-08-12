import { useContext } from 'react';
import '../styles/aside.css'
import { NavLink } from 'react-router-dom';
import { employeeContex } from '../contexApi/employeeDataContex';
function Aside() {
    const {colapsed,setColapsed}=useContext(employeeContex)
    return (  
        <>
            <aside className={colapsed?"aside collapsed":"aside"}>
                <div className="admin-container">
                    <div className="admin-image">
                        <img src="https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg" alt="" />
                    </div>
                    <div className="admin-details">
                        <h2 className="admin-name">Admin</h2>
                        <p className="admin-email">admin@gmail.com</p>
                    </div>
                </div>
                <div className="links-container">
                    <NavLink to="/" className="admin-link">Employee</NavLink>
                    <NavLink to="/assignment" className="admin-link">Assignment</NavLink>
                    <NavLink to="/analysis" className="admin-link">Anaylsis</NavLink>
                </div>
                
            </aside>
        </>
    );
}

export default Aside;