 import {   useNavigate } from "react-router-dom";
 
const Navbar = () => {
    let user = window.localStorage.getItem('user');
    user =JSON.parse(user)
    console.log(user)
    user = user.user
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
 
    const navigate =useNavigate();
 
    const logout = ()=>{
    
        window.localStorage.removeItem("user")
        navigate('/login')
    };
  
  return (
 <nav className="navbar">
    <div className="flex justify-between m-3 p-2">
        <div>
            <h1 className="text-5xl text-blue-500">Dashboard</h1>
        </div>
        <div className="flex gap-6">
            <p className="text-end text-gray-500">
                Welcome, <span className="font-semibold text-black">{user.name}</span>
                <br></br>
                <span className="text-[14px] font-semibold">{formattedDate}</span>
            </p>
            <button onClick={logout} className="p-2 text-white text-xl text-center font-bold    bg-black  rounded-md">Logout
           </button>
        </div>
    </div>
 </nav>
  );  
};

export default Navbar;
