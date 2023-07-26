import { Link ,useNavigate} from "react-router-dom";

import InputText from "../components/InputText";
import Container from "./Container";

const Login = () => {
    const navigate =useNavigate();

    const handleSubmit =()=>{
        navigate('/dashboard')
    }
  return (
<Container
content={
    <div>
          
          <div className="mt-1">
          <InputText placeholder="Email" type="email" />
          <InputText placeholder="Password" type="password" />
          <div className="m-3">
            <button onClick={handleSubmit} className="p-2 text-white text-xl font-bold w-[100%]  bg-blue-500  rounded-md">
              Log in
            </button>
          </div>
        </div>
        <div className="text-center">
          <Link to='/forget-password' className=" text-blue-400">Forgotten password?</Link>
        </div>
        <hr className="m-5" />
        <div className="m-3 flex justify-center">
          <Link
            to="/register"
            className="p-2 text-white text-xl text-center font-bold w-[45%]  bg-green-500  rounded-md"
          >
            Register
          </Link>
        </div>
    </div>
}
/>
   
  );
};

export default Login;
