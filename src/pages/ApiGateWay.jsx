import { useNavigate } from 'react-router-dom'

function ApiGateWay(){
  const navigate = useNavigate()
  return(
    <div style={{color:'white', padding:'40px'}}>
      <button onClick={() => navigate('/')} style={{color:'cyan', background:'none', border:'1px solid cyan', padding:'8px 16px', cursor:'pointer', marginBottom:'30px'}}>
        ← Back
      </button>
      <h1>ApiGateWay</h1>
      <p>Your project description here</p>
    </div>
  )
}

export default ApiGateWay