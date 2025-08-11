import { useContext, useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import { employeeContex } from "../contexApi/employeeDataContex"
import axios from "axios"
import '../styles/assignment.css'
import { predefinedQuestions } from "../dataArray/data"
import Navbar from "../Components/Navbar"

function AssignmentDetails() {
    const [employee,setEmployee]=useState(null)
    const {id}=useParams()
    const assignmentSubmissionLink=`https://admin-dashboard-d8005d.netlify.app/submit/assisment/${id}`
    const navigate=useNavigate()
    useEffect(()=>{
        getEmployee()
    },[])
    const getEmployee=async()=>{
        try {
            let res=await axios.get(`https://admindashboard-1hro.onrender.com/employee/getemployee/${id}`)
            console.log(res.data)
            setEmployee(res.data.employee)
        } catch (error) {
            console.log(error)
        }
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(assignmentSubmissionLink)
        .then(() => {
            alert("Link copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
    };
    const deleteEmployee=async()=>{
        try {
            let res=await axios.delete(`https://admindashboard-1hro.onrender.com/employee/delete/${id}`)
            if(res.data){
                alert("Employee Deleted")
                navigate("/")
            }
            else{
                alert("Employee not Present or Deleted")
            }
        } catch (error) {
            console.log(error)
            alert("Faild to delete Try again!")
        }
    }
    return (  
        <>
            <Navbar/>
        {employee &&
        <>
             <h1 className="emp-heading">{employee.name}`s Details</h1>
            <div className="assignment-details">
                <div className="emp-detail">
                    <h4>{employee.name}</h4>
                    <span className="role">{employee.role}</span>
                    <br />
                    <span>{employee.assessment_submitted?"Submitted":"Not Submited"}</span>
                </div>

                <button className="update-btn"
                    onClick={()=>{navigate(`/update-employee/${employee._id}`)}}
                >update</button> 

                <button className="update-btn"
                    onClick={copyToClipboard}
                >Copy Assignment Submission link</button>

                <button className="update-btn"
                    onClick={deleteEmployee}
                >Delete Employee</button>

                <h3>Assessement Question Answers</h3>
                <div className="questions">
                    {employee.assessment_answers.map((Qna,ind)=>{
                        
                        return(
                            <div className="question-answer">
                                <h3>{predefinedQuestions[ind]}</h3>
                                <p>{Qna.answer}</p>
                            </div>
                        )
                    })}
                </div>
                <span onClick={()=>navigate(`/update-Question/${id}`)}>ChangeQuestion Responce</span>
            </div>
        </>
           
        }
        
        </>
    );
}

export default AssignmentDetails;