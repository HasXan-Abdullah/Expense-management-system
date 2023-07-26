import { Link } from "react-router-dom";

import InputText from "../components/InputText";
import Container from "./Container";

const Registration = () => {
  return (
  
      <Container
      content={
          <div>
        <div className="mt-1">
        <InputText placeholder="Name" type="text" />
          <InputText placeholder="Email" type="email" />
          <InputText placeholder="Password" type="password" />
          <div className="m-3">
            <button className="p-2 text-white text-xl font-bold w-[100%]  bg-blue-500  rounded-md">
              Register
            </button>
          </div>
        </div>
  
        <hr className="m-5" />
        <div className="m-3 flex justify-center">

            <p className="text-gray-400">
            Already have account,<Link
            to="/login"
            className="text-blue-500"
          >
           login
          </Link>
            </p>
          
        </div>
  </div>}/>
  );
};

export default Registration;
