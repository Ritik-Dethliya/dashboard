import { useContext, useEffect, useState } from "react";
import { employeeContex } from "../contexApi/employeeDataContex";
import "../styles/overview.css"
function Overview() {
    const {employees}=useContext(employeeContex)
    const [total,setTotal]=useState(0)
    const [complete,setComplete]=useState(0)
    const [notComplete,setNotComplete]=useState(0)
    useEffect(()=>{
        if(!employees)return
        let result=employees.reduce((acc,val)=>{
            if(val.assessment_submitted){
                acc["submited"]++
            }
            else{
                acc["notSubmited"]++
            }
            return acc
        },{submited:0,notSubmited:0})
        
        const {submited,notSubmited}=result
        setComplete(submited)
        setNotComplete(notSubmited)
        setTotal(employees.length)
    },[employees])
    return (  
        <>
            <div className="overview-container">
                <div className="total">
                    <h1 className="heading-overview">Total Employee</h1>
                    {total}
                </div>
                <div className="total-assignment-submitted">
                    <h1 className="heading-overview">Assignment Submited</h1>
                    {complete}

                </div>
                <div className="total-pending-ass">
                    <h1 className="heading-overview">Assignment Pending</h1>
                    {notComplete}
                </div>
            </div>
        </>
    );
}

export default Overview;