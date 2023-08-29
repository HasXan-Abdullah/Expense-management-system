import { useState } from "react";
import { Link } from "react-router-dom";

import InputText from "../components/InputText";
import Container from "./Container";

const Registration = () => {
  // const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // try {
    //   const response = await axios.post(URL + "/auth/register", {
    //     name,
    //     email,
    //     password,
    //   });

    //   // Redirect to a success page or show a message
    //   history.push("/registration-success"); // Adjust the route accordingly
    // } catch (error) {
    //   // Handle registration error
    // }
  };

  return (
    <Container
      content={
        <div>
          <div className="mt-1">
            <InputText
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
                onClick={handleRegister}
                className="p-2 text-white text-xl font-bold w-[100%] bg-blue-500 rounded-md"
              >
                Register
              </button>
            </div>
          </div>
          <hr className="m-5" />
          <div className="m-3 flex justify-center">
            <p className="text-gray-400">
              Already have an account,{" "}
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

export default Registration;
