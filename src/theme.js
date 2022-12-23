import { createTheme } from '@material-ui/core/styles';

const myTheme= createTheme({
  root: {
    display: "flex",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#ffffff",
      },
    },
  },
});

export default createTheme(myTheme);