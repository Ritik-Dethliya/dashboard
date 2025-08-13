import { useContext, useEffect, useState } from "react";
import Aside from "../Components/Aside";
import Navbar from "../Components/Navbar";
import { employeeContex } from "../contexApi/employeeDataContex";
import { useNavigate } from "react-router-dom";
import Searching from "../Components/Searching";
import Sorting from "../Components/Sorting";
import Filtering from "../Components/Filtering";
import DashboardSkeleton from "../Components/Skeleton";

function Employees() {
     let {showAbleData,employees,setShowAbleData,loading,setLoading,colapsed}=useContext(employeeContex)

    const [filterEmployee,setFilterEmp]=useState(showAbleData)
    const [searchTerm,setSearchTerm]=useState("")
    const [filterObject,setFilterObject]=useState(null)
    const [sortOption, setSortOption] = useState(null);
    const navigate=useNavigate()
    function filterEmp(filterBy,value){

        const  filterEmployees=filterEmployee.filter((emp)=>{
            return emp[filterBy]==value
        })
        
        setFilterEmp(filterEmployees)
    }
    
    useEffect(()=>{
        if (!employees) return
        let data=[...employees]

        data=employees.filter((emp)=>emp.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        if(data.length<1){
            data=employees.filter((emp)=>emp.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        }

        //filter
        console.log(filterObject)
         for (let key in filterObject) {
            if (filterObject[key] !== "" && filterObject[key] !== undefined) {
                data = data.filter(emp => emp[key] == filterObject[key]);
            }
        }
        console.log(data)
        //sort
        if(sortOption){
            data.sort((a, b) => {
                if (sortOption === "nameAsc") return a.name.localeCompare(b.name);
                else if (sortOption === "nameDesc") return b.name.localeCompare(a.name);
                else if (sortOption === "dateAsc") {
                    return new Date(a.submission_date) - new Date(b.submission_date);
                }
                else if (sortOption === "dateDesc") {
                    return new Date(b.submission_date) - new Date(a.submission_date);
                }
                else if(sortOption === "scoreDesc")return b.score-a.score
                else if(sortOption === "scoreAesc")return b.score-a.score
                return 0;
            });
        }

        setShowAbleData(data);
    },[employees,searchTerm,filterObject,sortOption])
    return (  
        <>
            <Navbar/>
            <Aside/>
            <div className={colapsed?"dashboard-container colapsed":"dashboard-container"}>
                    <div className="sort-search">
                        <Searching setSearchTerm={setSearchTerm}/>
                        <Sorting setSortOption={setSortOption} filterEmployee={filterEmployee}/> 
                    </div>
                    <div className="filter-compo-container">
                        <Filtering setFilterObject={setFilterObject} filterObject={filterObject} />
                    </div>
                    {loading && <DashboardSkeleton/>}
                <div className="emp-container">
                    
                    {
                        showAbleData &&
                        showAbleData.map((employee,ind)=>{
                            return(
                                <div 
                                    className="employee-card" 
                                    key={employee._id}
                                    onClick={()=>navigate(`/assignment/${employee._id}`)}
                                >
                                    <div className="emp-image">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCwNH4Ch0iV5GbcycFuso8r4igYeM96TK4Q&s" alt="" />
                                    </div>
                                    <h4 className="employee-name">{employee.name}</h4>
                                    <span className="employee-role">{employee.role}</span>
                                    <br />
                                    <button className="employee-assignment-status">{
                                        employee.assessment_submitted?
                                        "Assignment Submited":
                                        "Assignment Not Submited"
                                    }</button>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Employees;