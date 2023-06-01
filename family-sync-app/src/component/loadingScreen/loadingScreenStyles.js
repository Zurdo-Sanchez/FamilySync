import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    position: 'fixed',
    opacity: 0.6,
    zIndex: 1,
    top: 0,
    left: 0
  },
  circular: {
    color: theme.palette.common.black
  }
}));

export { useStyles };
