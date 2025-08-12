import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const employeeContex=createContext()

const EmployeeContexProvider=({children})=>{
    const [employees,setEmployees]=useState(null)
    const [showAbleData,setShowAbleData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [colapsed,setColapsed]=useState(true)
    useEffect(()=>{
        getEmployees()
    },[])

    const getEmployees=async()=>{
        try {
            setLoading(true)
            let responce=await axios.get("https://admindashboard-1hro.onrender.com/employee/getemployee")
            console.log(responce.data)
            setEmployees(responce.data.employees)
            setShowAbleData(responce.data.employees)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return(
        <employeeContex.Provider value={{
            employees,showAbleData,
            setShowAbleData,
            setEmployees,
            loading,
            setLoading,
            colapsed,setColapsed
            }}>
            {children}
        </employeeContex.Provider>
    )
    
}

export default EmployeeContexProvider