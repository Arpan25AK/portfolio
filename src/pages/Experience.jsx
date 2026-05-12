import { useNavigate } from 'react-router-dom'
import '../App.css'
import bgPic from "../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";
import dogo from "../assets/doggo.jpeg"

function Experience() {
    const navigate = useNavigate()

    const matrixColumns = Array.from({ length: 60 }, (_, i) => (
        <div
            key={i}
            className="matrix-column"
            style={{
                left: `${(i / 60) * 100}vw`,
                animationDuration: `${2.3 + Math.random() * 2.2}s`,
                animationDelay: `-${Math.random() * 4}s`,
            }}
        />
    ))

    return(
        <div className='animated-bg'>

            {/* Matrix background */}
            <div className="matrix-container">
                <div className="matrix-pattern">
                    {matrixColumns}
                </div>
            </div>

            {/* Page content */}
            <div className='page-content'>

            <div>
                <button onClick={() => navigate('/')} className='back-button'>
                    <h1>Arpan A K</h1>
                </button>
            </div>

            <h2 style={{color : 'floralwhite', textAlign : 'center'}}>Please Give me Job. <br/>
            You Will Find My Contacts In Home Page</h2>

            <div>
                <img src={dogo} alt="dogo" className='dogo'/>
            </div>
            </div>
        </div>
    )
}

export default Experience