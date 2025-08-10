import './App.css'
import Dashboard from './Pages/Dashboard'
import {Routes,Route} from "react-router-dom"
import AssignmentDetails from './Pages/AssignmentDetails'
import UpdateQuestion from './Components/Updatequestion'
import AddEmployee from './Pages/AddEmployee'
import AssismentSubmission from './Pages/AssismentSubmission'
import UpdateEmployee from './Pages/UpdateEmployeeData'
import Anaylsis from './Pages/Anaylsis'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/anaylsis' element={<Anaylsis/>}/>
      <Route path='/addemployee' element={<AddEmployee/>}/>
      <Route path='/submit/assisment/:id' element={<AssismentSubmission/>}/>
      <Route path="/assignment/:id" element={<AssignmentDetails/>}/>
      <Route path="/update-employee/:id" element={<UpdateEmployee/>}/>
      <Route path="/update-Question/:id" element={<UpdateQuestion/>}/>
    </Routes>
    </>
  )
}

export default App
