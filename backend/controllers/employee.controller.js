import EmployeesModel from "../models/employee.model.js"

export const addEmployee=async(req,res)=>{
    try {
        
        let newEmployee=await EmployeesModel.create(req.body)
        console.log(req.body)
        if(newEmployee)return res.status(201).send({newEmployee})
        res.status(401).send({"msg":"Employee not added"})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something wrong at"})
    }
}