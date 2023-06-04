import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Styles from "./loginStyles";

import authFunction from "../../utils/authFunction";
import icoGit from "../../utils/media/git.png";
import icoGoogle from "../../utils/media/google.png";
import icoEmail from "../../utils/media/mail.png";

function LoginView(props) {
  const classes = Styles();
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
    <Grid className={classes.container}>
      <Grid className={classes.form}>
        <Typography className={classes.title}>Family Sync Login</Typography>

        <form method="post">
          <Grid className="username">
            <input
              type="text"
              required
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <label>User Name</label>
          </Grid>
          <Grid class="username">
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <label>Password</label>
          </Grid>
          <Grid className="recordar">¿Forgot your Password?</Grid>
          <Grid>
            <input
              className={classes.button}
              type="submit"
              value="Sign Up"
            ></input>
          </Grid>
          <Grid className="registrarse">
            I Want To <a href="#">Register</a>
          </Grid>

          <Grid class={classes.containerProvaiders}>
            <Grid className={classes.provaiders}>
              <img src={icoEmail}></img>
            </Grid>
            <Grid className={classes.provaiders}>
              <img src={icoGoogle}></img>
            </Grid>
            <Grid className={classes.provaiders}>
              <img src={icoGit}></img>
            </Grid>
          </Grid>

          <Grid className="recordar">
            <button
              className="btngit"
              onClick={() => handledDataSignup()}
            ></button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default LoginView;
