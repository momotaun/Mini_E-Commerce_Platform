import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelloPage from "./pages/hello";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloPage />} />
      </Routes>
    </Router>
  )
}

export default App