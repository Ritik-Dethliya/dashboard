import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { employeeContex } from "../contexApi/employeeDataContex";
import '../styles/updatequestion.css'
import Navbar from "./Navbar";
const intialValue={
    "questionNumber":"",
    "newResponce":""
}
function UpdateQuestion() {
    const [formData,setFormData]=useState(intialValue)
    const {id}=useParams()
    const [employee,setEmployee]=useState(null)
    const {employees}=useContext(employeeContex)

    useEffect(()=>{
        if(!employees)return
        setEmployee(employees.find((emp)=>emp._id==id))
    },[employees])
   
    let array=new Array(20).fill(0)

    const handleChange=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setFormData((prev)=>{
            return{...prev,[name]:value}
        })
        
    }

    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            if(formData.questionNumber=="")return console.log("Question Not Selected")
            let question=formData.questionNumber
            let option={id,update:"questions",questionNumber:formData.questionNumber,answer:formData.newResponce}
            let res=await axios.patch("http://localhost:8000/employee/update/employee/question",
                option
            )
            console.log(res.data)
            alert(res.data.msg)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (  
        <>
            <Navbar/>
            
            {employee &&
                <h1
                    style={{
                        textAlign:"center"
                    }}
                >Employee:{employee.name}
                </h1>
            }
            {
                employee &&
                <form onSubmit={handleSubmit} className="emp-questions-form">
                    
                    <label htmlFor="questionNumber">Update Question</label>
                    <select name="questionNumber" 
                        onChange={handleChange}
                    >
                        <option value="">Select Question</option>
                        {employee.assessment_answers.map((ques,index)=>{
                            return(
                                <option key={index} value={ques.question}>{ques.question}</option>
                            )
                        })}
                    </select>
                    <input type="text" 
                        name="newResponce" 
                        id="" 
                        placeholder="Update responce"
                        value={formData.newResponce}
                        onChange={handleChange} 
                    />
                    <button type="submit">Change Question</button>
                </form>
            }
            
        </>
    );
}

export default UpdateQuestion;