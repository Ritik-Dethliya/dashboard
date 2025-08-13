import { useContext, useEffect, useState } from "react";
import { employeeContex } from "../contexApi/employeeDataContex";
import '../styles/tableoverview.css'
function TableOverView() {
    const {employees}=useContext(employeeContex)
    const [rolesArray,setResultArray]=useState(null)
    const [roles,setRoles]=useState(null)
    useEffect(()=>{
        if(!employees)return
        
        let tempArray=[...employees]
        let roleskey=[]
        let res=tempArray.reduce((acc,val)=>{
            if(!acc[val.role]){
                acc[val.role]=[]
                roleskey.push(val.role)
            }
            acc[val.role].push(val)
            return acc
        },{})
        console.log(res)
        setResultArray(res)
        setRoles(roleskey)
    },[employees])
    return (  
        <>
        <h3 class="section-title"
            style={{
                marginTop:"10px"
            }}
        >Table overview</h3>
        <div className="table-container">
            <table className="dashboard-table">
                <thead>
                <tr>
                    <th>Role</th>
                    <th>Total Employees</th>
                    <th>Assignment Submitted</th>
                    <th>Assignment Pending</th>
                    <th>Avg Score</th>
                </tr>
                </thead>
                <tbody>
                {roles && roles.map((role) => (
                    <tr key={role}>
                    <td>{role}</td>
                    <td>{rolesArray[role].length}</td>
                    <td>{rolesArray[role].filter(emp => emp.assessment_submitted).length}</td>
                    <td>{rolesArray[role].filter(emp => !emp.assessment_submitted).length}</td>
                    <td>{(rolesArray[role].reduce((acc, val) => acc + val.score, 0) / rolesArray[role].length).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        </>
    );
}

export default TableOverView;