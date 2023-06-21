import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
}));

export default Styles;
