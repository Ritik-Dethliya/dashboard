import { useContext, useEffect, useState } from "react";
import { employeeContex } from "../contexApi/employeeDataContex";
import "../styles/recentAssignment.css"
function RecentAssignment() {
    const {employees}=useContext(employeeContex)
    const [resultArray,setResultArray]=useState(null)

    useEffect(()=>{
        if(!employees)return
        
        let employeeCopy=[...employees]
        employeeCopy=employeeCopy
            .sort((a,b)=> new Date(b.submission_date)-new Date(a.submission_date) )
            .filter((emp)=>emp.submission_date!=null)
        console.log(employeeCopy)
        setResultArray(employeeCopy)
    },[employees])
    return (  
        <>
            <h2 className="section-title">Recent Activity</h2>
            <div className="recent-assignment-container">
                
                {
                    resultArray &&
                    resultArray.map((emp)=>{
                        return(
                            <div className="recent-assignment-card" key={emp._id}>
                                <h3 className="emp-name">{emp.name}</h3>
                                <p className="submission-date">{emp.submission_date.split("T")[0]}</p>
                                <p>Submited Assignment</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    );
}

export default RecentAssignment;