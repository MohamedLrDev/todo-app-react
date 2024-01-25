import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600 font-poppins">
      <div className="w-96 p-6 shadow-2xl bg-white rounded-md ">
        <h1 className="text-center text-3xl">Login</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2">
            Nom d'utilisateur/Email :
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2">
            Mot de passe :
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-5 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="text-gray-600"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mb-2">
          <button className="styledButton" onClick={handleLogin}>
            Login
          </button>
        </div>
        <hr />
        <div className="text-[80%] flex justify-center mt-3">
          <h1>
            Nouveau sur cette plateforme ?{" "}
            <Link to="/signup" className="text-blue-600">
              Créer un compte
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
