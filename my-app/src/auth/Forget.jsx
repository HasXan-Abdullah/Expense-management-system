import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

import InputText from "../components/InputText";
import Container from "./Container";

const Forget = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/v1/auth/forgot-password", { email });
      console.log(response)
      if (response.data.success) {
        navigate('/update-password');
      }
    } catch (error) {
      console.error("Error sending reset password email:", error);
      // Handle error here
    }
  };
console.log(handleSubmit)
  return (
    <Container
      content={
        <div>
          <div className="mt-1">
            <InputText
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="m-3">
              <button
                onClick={handleSubmit}
                className="p-2 text-white text-xl font-bold w-[100%] bg-blue-500 rounded-md"
              >
                Send
              </button>
            </div>
          </div>

          <hr className="m-5" />
          <div className="m-3 flex justify-center">
            <p className="text-gray-400">
              Go back ←{" "}
              <Link to="/login" className="text-blue-500">
                login
              </Link>
            </p>
          </div>
        </div>
      }
    />
  );
};

export default Forget;
