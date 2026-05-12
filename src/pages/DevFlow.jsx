import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactFlow, { Background } from 'reactflow'
import 'reactflow/dist/style.css'
import './altPages.css'
import '../App.css'
import bgPic from '../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg'

const nodeStyle = (color) => ({
  background: '#2a303c',
  color: '#fff',
  border: `2px solid ${color}`,
  borderRadius: '6px',
  padding: '8px 12px',
  fontSize: '12px',
})

const infraStyle = (color) => ({
  background: '#1f2937',
  color: '#fff',
  border: `2px solid ${color}`,
  borderRadius: '6px',
  padding: '8px 12px',
  fontSize: '12px',
})

const nodes = [
  { id: 'client',  data: { label: 'Client / Frontend' },    position: { x: 250, y: 0 },   style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'gateway', data: { label: 'API Gateway' },           position: { x: 250, y: 80 },  style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'auth',    data: { label: 'Auth Service' },          position: { x: 0, y: 200 },   style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'repo',    data: { label: 'Repository Service' },    position: { x: 150, y: 200 }, style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'chat',    data: { label: 'Chat Service' },          position: { x: 300, y: 200 }, style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'cicd',    data: { label: 'CI/CD Service' },         position: { x: 450, y: 200 }, style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'kafka',   data: { label: 'Apache Kafka' },          position: { x: 250, y: 330 }, style: infraStyle('#f59e0b'), draggable: false },
  { id: 'notif',   data: { label: 'Notification Service' },  position: { x: 250, y: 430 }, style: nodeStyle('#66d9ed'), draggable: false },
  { id: 'eureka',  data: { label: 'Eureka Server' },         position: { x: 650, y: 200 }, style: infraStyle('#f59e0b'), draggable: false },
  { id: 'db',      data: { label: 'PostgreSQL / MongoDB' },  position: { x: 650, y: 80 },  style: infraStyle('#f59e0b'), draggable: false },
  { id: 'redis',   data: { label: 'Redis' },                 position: { x: 650, y: 330 }, style: infraStyle('#f59e0b'), draggable: false },
]

const edges = [
  { id: 'e1',  source: 'client',  target: 'gateway', animated: true, style: { stroke: '#66d9ed' } },
  { id: 'e2',  source: 'gateway', target: 'auth',    animated: true, style: { stroke: '#66d9ed' } },
  { id: 'e3',  source: 'gateway', target: 'repo',    animated: true, style: { stroke: '#66d9ed' } },
  { id: 'e4',  source: 'gateway', target: 'chat',    animated: true, style: { stroke: '#66d9ed' } },
  { id: 'e5',  source: 'gateway', target: 'cicd',    animated: true, style: { stroke: '#66d9ed' } },
  { id: 'e6',  source: 'repo',    target: 'kafka',   animated: true, style: { stroke: '#f59e0b' } },
  { id: 'e7',  source: 'chat',    target: 'kafka',   animated: true, style: { stroke: '#f59e0b' } },
  { id: 'e8',  source: 'cicd',    target: 'kafka',   animated: true, style: { stroke: '#f59e0b' } },
  { id: 'e9',  source: 'kafka',   target: 'notif',   animated: true, style: { stroke: '#f59e0b' } },
  { id: 'e10', source: 'eureka',  target: 'gateway', style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e11', source: 'eureka',  target: 'auth',    style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e12', source: 'eureka',  target: 'repo',    style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e13', source: 'eureka',  target: 'chat',    style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e14', source: 'eureka',  target: 'cicd',    style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e15', source: 'eureka',  target: 'notif',   style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e16', source: 'db',      target: 'repo',    style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e17', source: 'redis',   target: 'chat',    style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
]

function DevFlow(){
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

        <div className='side-header'>
          <h3>Distributed Systems</h3>
          <div className='heading'>
            DevFlow (Microservices <br />
            Repository Vault)
          </div>
          <h3 style={{marginTop: '30px'}}>Home > Portfolio > DevFlow</h3>
        </div>

        <div className='overview-content'>
          <p style={{marginTop:'-4px'}}>DevFlow is a scalable backend platform built on Java 21 and Spring Boot<br />
            microservices. It mimics a version control system where code events are <br />
            broadcasted asynchronously through Apache Kafka, stored via PostgreSQL <br />
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

        <h2 style={{textAlign:'center', color:'white', marginTop:'50px'}}>Logic Flow</h2>

        <div style={{width:'90%', height:'550px', margin:'20px auto', background:'transparent', borderRadius:'12px'}}>
          <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              nodesDraggable={false}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
          >
            <Background color="transparent" gap={16} />
          </ReactFlow>
        </div>

        <p className='outro'>
          <span style={{color:'cyan', textDecoration:'underline', textDecorationColor:'cyan'}}>@</span>
          Arpan AK made with passion
        </p>
          </div>
      </div>
  )
}

export default DevFlow