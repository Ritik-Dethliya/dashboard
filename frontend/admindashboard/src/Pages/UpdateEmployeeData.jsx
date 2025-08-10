import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import '../styles/updateemployee.css'

function UpdateEmployee() {
    const {id}=useParams()
    const [updateField,setUpdateField]=useState('')
    const [valueUpdateField,setValueUpdateField]=useState("")
    const array=["name","email","role","tags","longTermGoal","score"]
    const handelSubmit=async(e)=>{
        e.preventDefault()
        if(valueUpdateField.trim()==""||updateField=="")return
        try {
            let res=await axios.patch("http://localhost:8000/employee/update/employee",{updateField,valueUpdateField,id})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (  
        <>
            <Navbar/>
            <div className="update-container">
                <h1>Update employee Detail</h1>
                <form onSubmit={handelSubmit}>
                    <select 
                        onChange={(e)=>setUpdateField(e.target.value)}
                    >
                        <option value="">Select Feild to Update</option>
                        {
                            array.map((field)=>{
                                return(
                                    <option value={field}>{field}</option>
                                )
                            })
                        }
                    
                    </select>
                    <input type="text"  
                        onChange={(e)=>{
                            setValueUpdateField(e.target.value)
                        }}
                    />
                    <button type="submit">update</button>
                </form>
                
            </div>
        </>
    );
}

export default UpdateEmployee;