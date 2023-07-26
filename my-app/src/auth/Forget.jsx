import { Link, useNavigate } from "react-router-dom";

import InputText from "../components/InputText";
import Container from "./Container";

const Forget = () => {
const navigate = useNavigate();
    const handleSubmit =()=>{
navigate('/update-password')
    }
  return (
    
        <Container
        content={
            <div>
        <div className="mt-1">
          <InputText placeholder="Enter Your Email" type="email" />
          
          <div className="m-3">
            <button onClick={handleSubmit} className="p-2 text-white text-xl font-bold w-[100%]  bg-blue-500  rounded-md">
              Send
            </button>
          </div>
        </div>
      
        <hr className="m-5" />
        <div className="m-3 flex justify-center">
        <p className="text-gray-400">
            Go back  ← <Link
            to="/login"
            className="text-blue-500"
          >
           login
          </Link>
            </p>
        </div>
      </div>
        }/>
  );
};

export default Forget;
