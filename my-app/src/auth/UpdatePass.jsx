import   { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

import InputText from "../components/InputText";
import Container from "./Container";

const UpdatePass = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGRmYjE1M2E1NWJlZjI5ZWM5OGQyNTIiLCJpYXQiOjE2OTI5ODI1ODUsImV4cCI6MTY5Mjk4MzE4NSwidHlwZSI6InJlc2V0UGFzc3dvcmQifQ.l2dQDmHG_l_QhT2z-WL8rP5n2jTdo99w4GkrGTruh5c"
      const response = await axios.post("http://localhost:4000/v1/auth/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGRmYjE1M2E1NWJlZjI5ZWM5OGQyNTIiLCJpYXQiOjE2OTI5ODI1ODUsImV4cCI6MTY5Mjk4MzE4NSwidHlwZSI6InJlc2V0UGFzc3dvcmQifQ.l2dQDmHG_l_QhT2z-WL8rP5n2jTdo99w4GkrGTruh5c", { password });

      if (response.data.success) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Error updating password:", error);
      // Handle error here
    }
  };

  return (
    <Container
      content={
        <div>
          <div className="mt-1">
            <InputText
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputText
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="m-3">
              <button
                onClick={handleSubmit}
                className="p-2 text-white text-xl font-bold w-[100%] bg-blue-500 rounded-md"
              >
                Update
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

export default UpdatePass;
