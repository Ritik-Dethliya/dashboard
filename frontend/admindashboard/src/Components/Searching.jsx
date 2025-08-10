import { useContext } from "react"
import { employeeContex } from "../contexApi/employeeDataContex"

function Searching({setSearchTerm}) {
    const {employees,setShowAbleData}=useContext(employeeContex)
    function search(e){
        let searchWord=e.target.value
        console.log(searchWord)
        let result=[]
        result=employees.filter((emp)=>emp.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))
        if(result.length<1){
            result=employees.filter((emp)=>emp.email.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))
        }
        setShowAbleData(result)
    }
    return (  
        <>
            <div className="search">
                <input type="text" 
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Search"
                />
            </div>
        </>
    );
}

export default Searching;

