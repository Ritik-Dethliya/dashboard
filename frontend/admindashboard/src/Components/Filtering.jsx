import '../styles/filter.css'
let role=[
    "Developer",
    "Designer",
    "Backend Developer",
    "Product Manager",
    "QA",
    "HR",
    "Manager"
]
const InterestArea = [
  "AI/ML",
  "Data Science",
  "UI/UX",
  "Web Development",
  "Cloud Computing",
  "Software Testing",
  "Cybersecurity",
  "Agile Methodology",
  "People Management"
];

const longTerm = [
  "Tech Lead",
  "CTO",
  "Product Director",
  "Senior Engineer",
  "Data Scientist",
  "DevOps Lead",
  "QA Manager",
  "Solution Architect",
  "Creative Director",
  "Security Architect",
  "Program Director",
  "UI Lead",
  "ML Engineer",
  "HR Director"
];

const CulturePreference = [
  "Collaborative",
  "Innovative",
  "Supportive",
  "Analytical",
  "Detail-Oriented",
  "Creative",
  "Disciplined"
];

const LearningAttitude = [
  "Curious",
  "Self-Motivated",
  "Adaptable",
  "Persistent",
  "Analytical",
  "Creative",
  "Detail-Oriented",
  "Problem-Solver",
  "Organized",
  "Empathetic",
  "Innovative"
];
function Filtering({setFilterObject,filterObject}) {
    return (  
        <>
            <div className="filter-container">
                <h3
                    style={{textAlign:"center"}}
                >Filter</h3>
                <div className="filter">
                    <h3>
                        Assessment Submission
                    </h3>
                    <select
                        onChange={(e)=>{setFilterObject({...filterObject,"status":Number(e.target.value)})}}
                    >
                        <option value=""></option>
                        <option value={1}>Submitted</option>
                        <option value={0}>Not Submitted</option>
                    </select>

                    <h3>
                        Role
                    </h3>
                    <select onChange={(e)=>{setFilterObject({...filterObject,"role":e.target.value})}}>
                        <option value=""></option>
                        {role.map((rol,indx)=><option value={rol} key={indx}>{rol}</option>)}
                    </select>

                    <h3>
                        Interest Area
                    </h3>
                    <select
                        onChange={(e)=>{setFilterObject({...filterObject,"InterestArea":e.target.value})}}
                    >
                        <option value=""></option>
                        {InterestArea.map((intrest,index)=><option value={intrest} key={index}>{intrest}</option>)}
                    </select>

                    <h3>
                        Long-Term Goal
                    </h3>
                    <select
                        
                        onChange={(e)=>{setFilterObject({...filterObject,"LongTermGoal":e.target.value})}}
                    >
                        <option value=""></option>
                        {longTerm.map((goal,index)=><option value={goal} key={index}>{goal}</option>)}
                    </select>

                    <h3>
                        Culture Preference
                    </h3>
                    <select
                        onChange={(e)=>{setFilterObject({...filterObject,"culturePreference":e.target.value})}}
                    >
                        <option value=""></option>
                        {CulturePreference.map((preferen,index)=><option value={preferen} key={index}>{preferen}</option>)}
                    </select>

                    <h3>
                        Learning Attitude
                    </h3>
                    <select
                        onChange={(e)=>{setFilterObject({...filterObject,"learningAttitude":e.target.value})}}
                    >
                        <option value=""></option>
                        {LearningAttitude.map((attitude,index)=><option value={attitude} key={index}>{attitude}</option>)}
                    </select>
                </div>
            </div>
        </>
    );
}

export default Filtering;