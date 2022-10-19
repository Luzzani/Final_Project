import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import LoginGoogle from "../components/Register/LoginGoogle";
import { registerWhitEmailAndPassword } from "../redux/actions/auth";

import "./Register.css";

function Register() {
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

    registerWhitEmailAndPassword(credentials.email, credentials.password);

    setCredentials({
      email: "",
      password: "",
    });

    return <Navigate to={"/form-user"} replace={true} />;
  };

  if (email && email !== "") return <Navigate to={"/"} />;

  return (
    <div className="register__container">
      <Link to="/" className="register__backbtn">
        Home
      </Link>
      <h2 className="register__title">Registrarse</h2>
      <form onSubmit={submitHandler} className="register__form">
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            value={credentials.email}
            name="email"
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
        <button type="submit">Registrarse</button>
        <LoginGoogle />
      </form>
    </div>
  );
}

export default Register;
