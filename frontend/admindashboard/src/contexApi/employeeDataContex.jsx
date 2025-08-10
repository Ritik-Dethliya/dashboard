import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const employeeContex=createContext()

const EmployeeContexProvider=({children})=>{
    const [employees,setEmployees]=useState(null)
    const [showAbleData,setShowAbleData]=useState(null)
    useEffect(()=>{
        getEmployees()
    },[])

    const getEmployees=async()=>{
        try {
            let responce=await axios.get("http://localhost:8000/employee/getemployee")
            console.log(responce.data)
            setEmployees(responce.data.employees)
            setShowAbleData(responce.data.employees)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <employeeContex.Provider value={{employees,showAbleData,setShowAbleData,setEmployees}}>
            {children}
        </employeeContex.Provider>
    )
    
}

export default EmployeeContexProvider