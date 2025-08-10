import employeeModel from "../models/employee.model.js";
import e from "express";
import { addEmployee } from "../controllers/employee.controller.js";
const employeeRouter=e.Router()

employeeRouter.post("/addemployee",addEmployee)

employeeRouter.get("/getemployee",async(req,res)=>{
    try {
        const employees=await employeeModel.find()
        if(!employees)return res.status(200).send({"msg":"no employees added",employees:{}})
        res.status(200).send({employees})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something wrong at"})
    }
})

employeeRouter.get("/getemployee/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const employee=await employeeModel.findById(id)
        if(!employee)return res.status(200).send({"msg":"no employee found"})
        res.status(200).send({employee})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something wrong at"})
    }
})

employeeRouter.patch("/update/employee/question",async(req,res)=>{
    try {
        
        const {id,questionNumber,answer}=req.body
        let employee=await employeeModel.findById(id)
        if(!employee)return res.status(404).send({"msg":"employee Not Found"})
       
            let index = employee.assessment_answers.findIndex(
                (q) => q.question === questionNumber
            );

            if (index !== -1) {
                employee.assessment_answers[index].answer = answer;
            } else {
                employee.assessment_answers.push({
                    question: `q${employee.assessment_answers.length + 1}`,
                    answer
                });
            }
            await employee.save();
            return res.status(200).send({ msg: "update success" });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something wrong at"})
    }
})
employeeRouter.patch('/update/employee',async(req,res)=>{
    try {
        const {id,updateField,valueUpdateField}=req.body
        let employee=await employeeModel.findById(id)
        if(!employee)return res.status(404).send({"msg":"employee Not Found"})
        employee[updateField]=valueUpdateField
        await employee.save()
        res.status(200).send({employee})
    } catch (error) {
        res.status(500).send({"msg":"Something went Wrong "})
    }
})

employeeRouter.post("/submit/assiment/:id",async(req,res)=>{
    try {
        const {id}=req.params
        console.log(req.body)
        let employee=await employeeModel.findById(id)
        employee.assessment_answers=req.body
        employee.submission_date=new Date()
        employee.assessment_submitted=true
        await employee.save()
        res.status(201).send({"msg":"Assisment Submitted"})

    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"error in submission"})
    }
})
export default employeeRouter