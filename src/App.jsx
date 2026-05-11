import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DevFlow from './pages/DevFlow'
import ApiGateWay from './pages/ApiGateWay'
import Sentinel from './pages/Sentinel'
import ChatBot from './pages/ChatBot'
import Experience from './pages/Experience'

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devflow" element={<DevFlow />} />
      <Route path="/apigateway" element={<ApiGateWay />} />
      <Route path="/sentinel" element={<Sentinel />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  )
}

export default App