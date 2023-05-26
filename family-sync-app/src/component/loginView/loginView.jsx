import React, { useState } from "react";

import authFunction from "../../utils/authFunction";

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
    <>
      <h1>
        Hola nico
        <div className="Container">
          <h3 className="Title">Email</h3>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="Container">
          <h3 className="Title">Password</h3>
          <input
            className="input"
            type="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
        <button onClick={() => handledDataLogin("email")}>
          Login With Email
        </button>
        <button onClick={() => handledDataLogin("google")}>
          Login With google
        </button>
        <br/>
        <button onClick={() => handledDataSignup()}>SignUp With Email</button>
      </h1>
    </>
  );
}

export default LoginView;
