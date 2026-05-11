import { useNavigate } from 'react-router-dom'
import '../App.css'
import bgPic from "../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";
import dogo from "../assets/doggo.jpeg"

function Experience() {
    const navigate = useNavigate()

    return(
        <div>

            <div className='bg'>
                <img src={bgPic} alt="bgPic" />
            </div>

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
    )
}

export default Experience