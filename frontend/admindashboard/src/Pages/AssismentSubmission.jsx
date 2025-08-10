import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { predefinedQuestions } from "../dataArray/data";
import '../styles/submission.css'

const intialState={
    assessment_answers:[]
}
function AssismentSubmission() {
    const [employee,setEmployee]=useState(null)
    const {id}=useParams()
    const navigate=useNavigate()
    const [formData,setFormData]=useState(intialState)
    useEffect(()=>{
        getEmployee()
    },[])
    const getEmployee=async()=>{
        try {
            let res=await axios.get(`http://localhost:8000/employee/getemployee/${id}`)
            console.log(res.data)
            setEmployee(res.data.employee)
            const assessment_answers=res.data.employee.assessment_answers
            console.log(assessment_answers)
            setFormData({assessment_answers})
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange=(question,answer,ind)=>{
        console.log(answer)
        let answers=formData.assessment_answers
        answers[ind]={question,answer}
        setFormData({...formData,assessment_answers:answers})
        console.log(formData)
    }
    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            let res=await axios.post(`http://localhost:8000/employee/submit/assiment/${id}`,formData.assessment_answers)
            if(res.status==201){
                alert("Assiment Save Successfully!")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    return (  
        <>
            <h2
                style={{
                    textAlign:"center"
                }}
            >Assisment</h2>
            <div className="assisment-submission-container">
                <form onSubmit={handleSubmit}>
                    {   formData.assessment_answers &&
                        formData.assessment_answers.map((q,ind)=>{
                            return(<>
                                <label htmlFor={q.question}
                                    className="question"
                                >
                                    {predefinedQuestions[ind]}
                                </label>
                                <input 
                                    type="text" 
                                    name={q.question}  
                                    value={q.answer}
                                    onChange={(e)=>handleChange(q.question,e.target.value,ind)} 
                                    className="answer-input"
                                />
                            </> )
                        })
                    }
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AssismentSubmission;