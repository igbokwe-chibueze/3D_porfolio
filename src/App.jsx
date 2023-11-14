import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>

        </Routes>
      </Router>
    </main>
  )
}

export default App