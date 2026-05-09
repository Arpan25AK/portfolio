import { useNavigate } from 'react-router-dom'
import './altPages.css'
import '../App.css'
import bgPic from '../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg'
import devflow from '../assets/DevFlow Ecosystem with API-2026-05-09-081822.png'

function DevFlow(){
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

        <div className='side-header'>
          <h3>Distributed Systems</h3>
          <div className='heading'>
            DevFlow (Microservices <br />
                Repository Vault)
          </div>

          <h3 style={{marginTop: '30px'}}>Home > Portfolio > DevFlow</h3>
        </div>

        <div className='overview-content'>
          <p style={{marginTop :'-4px'}}>DevFlow is a scalable backend platform built on Java 21 and Spring Boot<br />
            microservices. It mimics a version control system where code events are <br />
            broadcasted asynchronously  through Apache Kafka, stored via PostgreSQL <br />
            and MinIO (S3), and routed through a central API Gateway with Eureka <br/>
            service discovery.</p>

          <div className='project-meta'>
            <div className='meta-row'>
              <div className='meta-item'>
                <h4>Type</h4>
                <p>Personal Project</p>
              </div>
              <div className='meta-item'>
                <h4>Technologies</h4>
                <p>· Java · Spring Boot · Kafka <br/>
                  · PostgreSQL · MinIO · Docker <br/>
                  · Eureka</p>
              </div>
            </div>
            <div className='meta-item'>
              <a href='https://github.com/Arpan25AK/DevFlow' target='_blank' className='open-project'>
                Open Project →
              </a>
            </div>
          </div>
        </div>

      <div>
        <h2 style={{textAlign: 'center' ,color: 'white', marginTop : '50px'}}>Logic Flow</h2>
      <img src={devflow} alt="devflow" className='flowchart' />
      </div>


      <p className='outro'>@Arpan AK made with passion</p>
    </div>
  )
}

export default DevFlow