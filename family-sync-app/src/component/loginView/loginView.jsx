import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./loginStyles.js";
import "./loginStyle.css";

import authFunction from "../../utils/authFunction";

function LoginView(props) {
  const classes = Styles();
  const {
    //STATES
    getIsLoggedSelector,
    //ACTIONS
    authAction,
  } = props;
  const navigate = useNavigate();
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

  useEffect(() => {
    if (getIsLoggedSelector) {
      navigate("/dashboard");
    }
  }, [getIsLoggedSelector]);

  return (
    <div className="container">
      <div className="formulario">
        <h1>Family Sync Login</h1>

        <form method="post">
          <div className="username">
            <input
              type="text"
              required
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <label>User Name</label>
          </div>
          <div class="username">
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <label>Password</label>
          </div>
          <div className="recordar">¿Forgot your Password?</div>
          <div>
            <input
              className={classes.button}
              type="submit"
              value="Sign Up"
            ></input>
          </div>
          <div className="registrarse">
            I Want To <a href="#">Register</a>
          </div>

          <div class="init">
            <div className="recordar">
              <button
                class="btnmail"
                onClick={() => handledDataLogin("email")}
              ></button>
            </div>
            <div className="recordar">
              <button
                className="btngoogle"
                onClick={() => handledDataLogin("google")}
              ></button>
            </div>

            <div className="recordar">
              <button
                className="btngit"
                onClick={() => handledDataSignup()}
              ></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
