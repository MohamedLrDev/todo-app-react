import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [formData, setFormData] = useState({
    nomUtilisateur: "",
    email: "",
    motDePasse: "",
    confirmerMotDePasse: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data : ", formData);
    setFormData({
      nomUtilisateur: "",
      email: "",
      motDePasse: "",
      confirmerMotDePasse: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600 font-poppins">
      <form
        className="w-96 p-6 shadow-2xl bg-white rounded-md "
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl">Inscription</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="block text-base mb-2">Nom d'utilisateur :</label>
          <input
            type="text"
            name="nomUtilisateur"
            value={formData.nomUtilisateur}
            onChange={handleChange}
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2">E-mail :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2">Mot de passe :</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/3 right-2 transform -translate-y-1/2 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="text-gray-600"
              />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2">
            Confirmer le mot de passe :
          </label>
          <div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmerMotDePasse"
              value={formData.confirmerMotDePasse}
              onChange={handleChange}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-4"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-[65%] right transform -translate-y-1/2 -translate-x-7 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEye : faEyeSlash}
                className="text-gray-600"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mb-2">
          <button className="styledButton" type="submit">
            S'inscrire
          </button>
        </div>
        <hr />
        <div className="text-[80%] flex justify-center mt-3">
          <h1>
            Déja un compte ?{" "}
            <Link to="/" className="text-blue-600">
              Connectez-vous
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
