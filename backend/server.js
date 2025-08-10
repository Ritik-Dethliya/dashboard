import connectDb from "./Db.config.js";
import e from "express";
import employeeRouter from "./routes/employee.router.js";
import cors from "cors"
const app=e()
app.use(e.json())
app.use(cors())
connectDb()

app.use("/employee",employeeRouter)
app.listen(8000,()=>{
    console.log("server run at 8000")
})