import axios from "axios";
import { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import '../styles/addemployee.css'
import Aside from "../Components/Aside";
import { employeeContex } from "../contexApi/employeeDataContex";

const intialState={
    name:"",
    email:"",
    role:"",
    longTermGoal:"",
    tags:"",
    score:0,
}
function AddEmployee() {
    const {colapsed}=useContext(employeeContex)
    const [formData,setFormData]=useState(intialState)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            let res=await axios.post("https://admindashboard-1hro.onrender.com/employee/addemployee",formData)
            // console.log(res.data)
            if(res.data){
                alert("employee Added")
                setFormData(intialState)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (  
        <>
            <Navbar/>
            <Aside/>
            <div className={colapsed?"dashboard-container colapsed":"dashboard-container"}>
            <div className="add-employee-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter Emplyoee name" 
                        required
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Emplyoee email" 
                        required
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <input 
                        type="text" 
                        name="role" 
                        placeholder="Enter Emplyoee`s role" 
                        required
                        onChange={handleChange}
                        value={formData.role}
                    />
                    <input 
                        type="text" 
                        name="longTermGoal" 
                        placeholder="Enter Emplyoee`s longTermGoal" 
                        required
                        onChange={handleChange}
                        value={formData.longTermGoal}
                    />
                    <input 
                        type="text" 
                        name="tags" 
                        id="" 
                        placeholder="Add tages" 
                        onChange={handleChange}
                        value={formData.tags}
                    />
                    <input 
                        type="number" 
                        name="score" 
                        placeholder="Enter score of employee"
                        onChange={handleChange}
                        value={formData.score}
                    />
                    <button>Add</button>
                </form>
            </div>
            </div>
        </>
    );
}

export default AddEmployee;