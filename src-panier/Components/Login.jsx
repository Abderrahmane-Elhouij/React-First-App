import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const SendLogin = (e) => {
    e.preventDefault();
    if (
      document.forms[0].elements["login"].value === "admin" &&
      document.forms[0].elements["password"].value === "admin"
    ) {
      navigate("/products");
    } else {
      alert("login ou mots de pass invalid !");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={SendLogin}>
        <label htmlFor="login">Login :</label>
        <input type="text" name="login" id="login" required />
        <br />
        <label htmlFor="password">Password :</label>
        <input type="text" name="password" id="password" required />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
