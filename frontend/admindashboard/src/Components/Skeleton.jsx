import '../styles/skeleton.css'
function DashboardSkeleton() {
    const array=new Array(10).fill(0)
    
    return (  
        <>
            <div className="skeleton-container">
                {   array.map((val,index)=>{
                    return(
                        <div className="skeleton-emp-card">
                            <p className="sketeton-name">.</p>
                            <p className="sketeton-role"></p>
                            <p className="sketeton-status"></p>
                        </div>
                        )
                    })
                    
                    
                }
            </div>
        </>
    );
}

export default DashboardSkeleton;

export function AssignmentSkeleton(){
    const questionArray=new Array(20).fill(0)
    return(
        <>
            <div className="skeleton-container-assign">
                <p className="skeleton-heading"></p>
                <div className="skeleton-details">
                    <div className="skeleton-emp-card">
                            <p className="sketeton-name">.</p>
                            <p className="sketeton-role"></p>
                            <p className="sketeton-status"></p>
                    </div>
                    <div className="skeleton-btn">
                        <button className='skbtn'></button>
                        <button className='skbtn'></button>
                        <button className='skbtn'></button>
                    </div>
                    
                </div>
                
            </div>
            <div className="skeleton-container">
                
            </div>
            <div className="assgment-question">
                        {questionArray.map((val,indx)=>{
                            return(
                                <div className="sk-question">
                                    <p className='sk-q'></p>
                                    <p className='sk-a'></p>
                                </div>
                            )
                        })}
            </div>
        </>
    )
}