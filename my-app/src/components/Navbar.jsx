 import {   useNavigate } from "react-router-dom";
 
const Navbar = () => {
   
 
 
    const navigate =useNavigate();

    const handleSubmit =()=>{
        navigate('/login')
    }
  return (
 <nav className="navbar">
    <div className="flex justify-between m-3 p-2">
        <div>
            <h1 className="text-5xl text-blue-500">Dashboard</h1>
        </div>
        <div>
            <button onClick={handleSubmit} className="p-2 text-white text-xl text-center font-bold    bg-black  rounded-md">Logout</button>
        </div>
    </div>
 </nav>
  );  
};

export default Navbar;
