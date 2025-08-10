import { Pie, PieChart, ResponsiveContainer,Tooltip} from 'recharts';
import { employeeContex } from '../contexApi/employeeDataContex';
import { useContext, useEffect, useState } from 'react';

export default function PieStatus() {
    let {employees}=useContext(employeeContex)
    const [data,setData]=useState([])
    
    useEffect(()=>{
        if(!employees)return
        let result=employees.reduce((acc,val)=>{
            if(val.status){
                acc["submited"]++
            }
            else{
                acc["notSubmited"]++
            }
            return acc
        },{submited:0,notSubmited:0})
        console.log(result)
        const {submited,notSubmited}=result
        setData([{name:"Submited",value:submited},{name:"Not-Submited",value:notSubmited}])
    },[employees])
  return (
    
      <PieChart width={400} height={400}>
        <Pie
        activeShape={{
            fill: 'red',
        }}
        data={data}
        dataKey="value"
        />
        <Tooltip defaultIndex={2} />
        </PieChart>
    
  );
}

