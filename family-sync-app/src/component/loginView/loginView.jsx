import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../styles/loginStyles.js";

import MailIcon from "@mui/icons-material/Mail";
// import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Button, Grid, Input } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import authFunction from "../../utils/authFunction";
import GoogleIcon from "../../utils/media/google.png";

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

  const handledDataLogin = async (provider) => {
    //creates data required for user login
    const dataLogin = {
      provider,
      email,
      password,
    };
    await authAction(dataLogin);
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
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        backgroundColor: "#c0cfc0",
      }}
    >
      <Paper
        className={classes.paperLogin}
        style={{ width: 400, height: 450 }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "grid",
            gap: 2,
          }}
        >
          <Typography variant="h3" className={classes.customTypography}>
            Family Sync Login
          </Typography>

          <Grid className="blockLogin">
            <Typography>Nombre</Typography>

            <TextField
              gap="4"
              required
              id="outlined-required"
              label="Required"
              type="text"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </Grid>

          <Grid>
            <Typography>Password</Typography>

            <TextField
              required
              id="outlined-required"
              label="Required"
              type="password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </Grid>

          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained">¿Forgot your Password?</Button>

            <Button variant="contained">Sign Up</Button>
          </Box>

          <Grid>
            <Typography variant="h6">
              I Want To <Button variant="contained">Register</Button>
            </Typography>
          </Grid>

          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Grid>
              <img
                className={classes.googleIcon}
                src={GoogleIcon}
                onClick={() => handledDataLogin("email")}
              />
            </Grid>
            <Grid>
              <img
                className={classes.googleIcon}
                src={GoogleIcon}
                onClick={() => handledDataLogin("google")}
              />
            </Grid>
            <Grid>
              <img
                className={classes.googleIcon}
                src={GoogleIcon}
                onClick={() => handledDataLogin("google")}
              />
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default LoginView;
