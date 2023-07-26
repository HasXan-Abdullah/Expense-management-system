
import { BrowserRouter as Router, Route, Routes }
    from "react-router-dom";
 import './App.css'
import Login from "./auth/Login"
import Registration from "./auth/Registration"
import Forget from "./auth/Forget";
import UpdatePass from "./auth/UpdatePass";
import Dashboard from "./dashboard/Dashboard";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Login/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/register" element={ <Registration/> } />
          <Route exact path="/forget-password" element={ <Forget/> } />
          <Route exact path="/update-password" element={ <UpdatePass/> } />
          <Route exact path="/dashboard" element={ <Dashboard/> } />
        </Routes>
      
            </Router>
    
  </div>
  )
}

export default App
