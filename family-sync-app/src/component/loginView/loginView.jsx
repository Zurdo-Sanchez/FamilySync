import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../styles/loginStyles.js";
import { Avatar, Button, Grid, Link } from "@mui/material";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import authFunction from "../../utils/authFunction";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailLockIcon from "@mui/icons-material/MailLock";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "../../utils/Theme.js";

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
    <Grid contained className={classes.gridMain}>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className={classes.titleH2}>FamilySinc App</h2>
        </Grid>
        <TextField
          style={{ marginBottom: "10px" }}
          required
          fullWidth
          type="text"
          id="outlined-required"
          label="Usuario"
          placeholder="Nombre usuario"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <TextField
          style={{ marginBottom: "10px" }}
          required
          fullWidth
          id="outlined-required"
          label="Contraseña"
          placeholder="Contraseña"
          type="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <Button
          style={{ marginBottom: "10px" }}
          className={classes.signBtnStyle}
          variant="contained"
          type="submit"
          fullWidth
        >
          Iniciar
        </Button>
        <Typography
          style={{
            marginBottom: "10px",
            textAlign: "center",

            color: "#aa6a54",
          }}
        >
          <Link style={{ color: "#aa6a54" }} href="#">
            No recuerda su contraseña ?
          </Link>
        </Typography>
        <Typography
          style={{
            marginBottom: "10px",
            textAlign: "center",
            color: "#869086",
          }}
        >
          {" "}
          Quiere tener una cuenta ?{" "}
          <Link style={{ color: "#aa6a54" }} href="#">
            REGISTRO
          </Link>
        </Typography>

        <Button
          style={{ marginBottom: "10px", color: "#869086" }}
          variant="outlined"
          onClick={() => handledDataLogin("email")}
          startIcon={<MailLockIcon />}
          fullWidth
        >
          Iniciar con e - mail
        </Button>
        <Button
          style={{ marginBottom: "10px", color: "#869086" }}
          variant="outlined"
          onClick={() => handledDataLogin("google")}
          startIcon={<GoogleIcon />}
          fullWidth
        >
          Iniciar con Google
        </Button>
        <Button
          style={{ marginBottom: "10px", color: "#869086" }}
          variant="outlined"
          onClick={() => handledDataLogin("google")}
          startIcon={<GitHubIcon />}
          fullWidth
        >
          Iniciar con GitHub
        </Button>
      </Paper>
    </Grid>
  );
}

export default LoginView;
