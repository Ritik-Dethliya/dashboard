import AverageScore from "../Components/AverageScore";
import Navbar from "../Components/Navbar";
import PieStatus from "../Components/PieChart";
import '../styles/anaylsis.css'
function Anaylsis() {
    return (  
        <>
            <Navbar/>
            <div className="ana-conatiner">
                <div className="assignment-submission">
                    <p>Assignment Submission</p>
                    <PieStatus/>
                </div>
                <div className="avgScore">
                    <p>AverageScore By Role</p>
                    <AverageScore/>
                </div>
            </div>
            
        </>
    );
}

export default Anaylsis;