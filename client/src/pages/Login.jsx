import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { loginWhitEmailAndPassword } from "../redux/actions/auth";

import LoginGoogle from "../components/Register/LoginGoogle";

import "./Register.css";

function Login() {
  const { email } = useSelector((state) => state.authReducer);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setCredentials((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      loginWhitEmailAndPassword(credentials.email, credentials.password);
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      //manejo de errores
      console.log(error);
    }
  };

  if (email) return <Navigate to={"/"} />;

  return (
    <div className="register__container">
      <h2 className="register__title">Iniciar Sesión</h2>
      <form onSubmit={submitHandler} className="register__form">
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            value={credentials.email}
            id="email"
            placeholder="youremail@company.dtl"
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            value={credentials.password}
            name="password"
            id="password"
            placeholder="******"
            onChange={changeHandler}
          />
        </label>
        <button>Iniciar Sesión</button>
        <LoginGoogle />
      </form>
    </div>
  );
}

export default Login;
