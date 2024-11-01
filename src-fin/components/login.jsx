import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const f1 = () => {
    navigate("/espace");
  };
  return (
    <div className="login-container">
      <img
        src="imgProjet/A3.jpg"
        alt="Background "
        className="background-img"
      />
      <div className="login-form-container">
        <img src="imgProjet/Logo Ofppt.jpg" alt="Logo" className="logo" />
        <form action="#" onSubmit={f1}>
          <div className="form-group">
            <h1>Login</h1>
            <hr />
            <div className="input-container">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <br />
            </div>
            <select name="Role" id="Role" placeholder="Role">
              <option disabled selected>
                Role
              </option>
              <option value="Formateur">Formateur</option>
              <option value="Administrateur">Administrateur</option>
            </select>
            <br />
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
