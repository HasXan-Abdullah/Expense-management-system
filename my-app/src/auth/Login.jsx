import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import InputText from "../components/InputText";
import Container from "./Container";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const URL = import.meta.env.VITE_API_URL
  console.log(URL)

  const login = async (email, password) => {
    try {
      const response = await axios.post(URL + "/auth/login", {
        email,
        password,
      });

      if (response.data.tokens.access.token) {
        window.localStorage.setItem("user", JSON.stringify(response.data));
        navigate('/dashboard');
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("An error occurred.");
    }
  };

  const handleSubmit = async () => {
    login(email, password);
  };

  return (
    <Container
      content={
        <div>
          <div className="mt-1">
            <InputText
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="m-3">
              <button
                onClick={handleSubmit}
                className="p-2 text-white text-xl font-bold w-[100%] bg-blue-500 rounded-md"
              >
                Log in
              </button>
            </div>
            {error && <div className="m-9 p-2 text-center">
              
              <div className="text-red-500 text-center  bg-zinc-100">
                {error}
                </div> </div>}
          </div>
          <div className="text-center">
            <Link to="/forget-password" className="text-blue-400">
              Forgotten password?
            </Link>
          </div>
          <hr className="m-5" />
          <div className="m-3 flex justify-center">
            <Link
              to="/register"
              className="p-2 text-white text-xl text-center font-bold w-[45%] bg-green-500 rounded-md"
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
