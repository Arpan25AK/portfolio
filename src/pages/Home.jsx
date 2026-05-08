import { useNavigate } from 'react-router-dom'
import '../App.css'
import bgPic from '../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg'
import blockImg from '../assets/blockImg.png'
import helloimg from '../assets/hello-world-html-code-768x384.png'
import devflowImg from '../assets/DevFlow Ecosystem-2026-05-07-090944.png'


function Home(){
  const navigate = useNavigate()
  return(
    <div>
      <div className='bg'>
        <img src={bgPic} alt="bgPic" />
      </div>

      <div className='header'>
        <h1>Arpan A K</h1>
        <div className='nav'>
          <h3>Home</h3>
          <h3> // skills </h3>
          <h3> // projects</h3>
          <h3> // Experience</h3>
          <h3> // Contact</h3>
        </div>
      </div>

      <img src={blockImg} alt="blockImg" className='block-img' />

      <div className='sec-header'>
        <p><span>ARPAN A K</span></p>
      </div>

      <div className='contents'>
        FullStack Software Developer <br />
        & <br />
        Ai Enthusiast
      </div>

      <div className='content-header'>
        <h1>Skills</h1>
      </div>

      <div className='skill-grid'>
        <div className='skill-card'>
          <h2>BackEnd</h2>
          <p className='tag'>&lt;h3&gt;</p>
          <p className='card-desc'>Experienced in building robust server-side applications using Java and Spring Boot. Familiar with JWT authentication, event-driven architecture with Kafka.</p>
          <p className='tag'>&lt;/h3&gt;</p>
        </div>
        <div className='skill-card'>
          <h2>FrontEnd</h2>
          <p className='tag'>&lt;h3&gt;</p>
          <p className='card-desc'>Passionate about building responsive UIs. Experienced in HTML5, CSS, JavaScript and React for building modern web applications.</p>
          <p className='tag'>&lt;/h3&gt;</p>
        </div>
      </div>

      <div className='helloImg'>
        <img src={helloimg} alt="helloimg" />
      </div>

      <div className='content-header'>
        <h1>Projects</h1>
      </div>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 20%'}}>
        <h1 className='content-header' style={{margin:0}}>DevFlow</h1>
        <h1 className='content-header' style={{margin:0}}>ApiGateWay</h1>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div onClick={() => navigate('/devflow')} style={{cursor:'pointer', width:'fit-content', marginLeft : '20%'}}>
          <h1 className='explore-headers'>Explore // </h1>
        </div>

        <div onClick={() => navigate('/apigateway')} style={{cursor:'pointer', width:'fit-content', marginRight : '21%'}}>
          <h1 className='explore-headers'>Explore // </h1>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 20%', marginTop : '50px'}}>
        <h1 className='content-header' style={{margin:0, marginLeft :'25%'}}>Sentinel</h1>
        <h1 className='content-header' style={{margin:0, marginRight : '25%'}}>ChatBot</h1>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div onClick={() => navigate('/sentinel')} style={{cursor:'pointer', width:'fit-content', marginLeft : '20%'}}>
          <h1 className='explore-headers'>Explore // </h1>
        </div>

        <div onClick={() => navigate('/chatbot')} style={{cursor:'pointer', width:'fit-content', marginRight : '21%'}}>
          <h1 className='explore-headers'>Explore // </h1>
        </div>
      </div>
      

    </div>
  )
}

export default Home