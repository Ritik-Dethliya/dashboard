import { useContext, useEffect, useState } from "react";
import { employeeContex } from "../contexApi/employeeDataContex";
import { Pie, PieChart, ResponsiveContainer,Tooltip} from 'recharts';

function AverageScore() {
    const [data,setData]=useState([])
    let {employees}=useContext(employeeContex)
    useEffect(()=>{
        if(!employees)return 
        let role
        role=employees.reduce((acc,val)=>{
            if (!acc[val.role]) {
                acc[val.role] = { totalScore: 0, count: 0 };
            }
            acc[val.role].totalScore += val.score;
            acc[val.role].count += 1;
            return acc;
        },{})
        console.log(role)
        let roleAna=[]
        for(let key in role){
            roleAna.push({name:key,value:role[key].totalScore/role[key].count})
        }
        console.log(roleAna)
        setData(roleAna)
    },[employees])
    return (  
        <>
         <PieChart width={400} height={400}>
            <Pie
                activeShape={{
                    fill: 'red',
                }}
                data={data}
                dataKey="value"
                label
            />
                <Tooltip defaultIndex={2} />
        </PieChart>
        </>
    );
}

export default AverageScore;