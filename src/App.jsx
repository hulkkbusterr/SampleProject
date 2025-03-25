import { useSelector } from 'react-redux'
import './App.css'
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Home />
      </div>
    </>
  )
}

export default App