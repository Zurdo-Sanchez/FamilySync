import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../../styles/loginStyles.js";
import { Avatar, Button, Grid, Input, Link } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
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
    <Grid className={classes.gridMain}>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className={classes.titleH2}>FamilySinc</h2>
        </Grid>
        <TextField
          style={{ marginBottom: "10px" }}
          required
          fullWidth
          type="text"
          id="outlined-required"
          label="UserName"
          placeholder="Enter UserName"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <TextField
          style={{ marginBottom: "10px" }}
          required
          fullWidth
          id="outlined-required"
          label="Password"
          placeholder="Enter Password"
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
          SIGN IN
        </Button>
        <Typography
          style={{
            marginBottom: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography
          style={{
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {" "}
          Do you have an account ? <Link href="#">REGISTER</Link>
        </Typography>

        <Button
          style={{ marginBottom: "10px" }}
          variant="outlined"
          onClick={() => handledDataLogin("email")}
          color="success"
          startIcon={<MailLockIcon />}
          fullWidth
        >
          Iniciar con Mail
        </Button>
        <Button
          style={{ marginBottom: "10px" }}
          variant="outlined"
          onClick={() => handledDataLogin("google")}
          color="success"
          startIcon={<GoogleIcon />}
          fullWidth
        >
          Iniciar con Google
        </Button>
        <Button
          style={{ marginBottom: "10px" }}
          variant="outlined"
          onClick={() => handledDataLogin("google")}
          color="success"
          startIcon={<GitHubIcon />}
          fullWidth
        >
          Iniciar con Git
        </Button>
      </Paper>
    </Grid>
  );
}

export default LoginView;
