import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import SignUp from "./Components/SignUp";
// import ResumeSubmission from "./Components/ResumeSubmission"

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<SignUp/>}/>
    
    </Routes>
    </Router>
    </>
  );
}

export default App;
