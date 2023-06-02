import React, { useState } from "react";

import authFunction from "../../utils/authFunction";
import "./loginStyle.css";

function LoginView(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handledDataLogin = (provider) => {
    //creates data required for user login
    const dataLogin = {
      provider,
      email,
      password,
    };

    authFunction(dataLogin);
  };

  const handledDataSignup = () => {
    //creates data required for user creation
    const dataSignup = {
      provider: "signup",
      email,
      password,
    };

    authFunction(dataSignup);
  };

  return (
    <div className="container">
      <div className="formulario">
        <h1 className="title">FamilySync</h1>

        <form>
          <div>
            <input
              type="text"
              placeholder="Escriba su email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <label>Nombre De Usuario</label>
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <label>Password</label>
          </div>

          <div className="remember"> ¿Olvido su Password? </div>

          <imput type="submit" value="Sign Up"></imput>

          <div className="register">
            <a href="#">Register</a>
          </div>

          <div>
            <div className="divbutton">
              <button
                className="button"
                onClick={() => handledDataLogin("email")}
              >
                SignUp With Email
              </button>
            </div>
            <div className="divbutton">
              <button
                className="button"
                onClick={() => handledDataLogin("google")}
              >
                Login With Google
              </button>
            </div>

            <div className="divbutton">
              <button className="button" onClick={() => handledDataSignup()}>
                SignUp With GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
