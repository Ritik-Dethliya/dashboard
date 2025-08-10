import { Schema,model } from "mongoose";

const questions=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14","q15","q16","q17","q18","q19","q20"]

const assessment_answersSchema=new Schema({
    _id: false,
    question: { type: String, required: true }, 
    answer: { type: String}
})

const empoloyee=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    role:{type:String},
    assessment_submitted:{type:Boolean,default:false},
    assessment_answers:{
        type:[assessment_answersSchema],
        default:function(){
            return questions.map((q)=>({ question: q, answer: ""}))
        }
    },
    tags:[{type:String}],
    longTermGoal:{type:String,default:""},
    submission_date:{type:Date,default:null},
    score:{type:Number,default:0}
},{timestamps:true})

const EmployeesModel=model("employee",empoloyee)
export default EmployeesModel