import "./App.css";
import ResponsiveDrawer from "./HeaderNav";
import customTheme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <ResponsiveDrawer />
      </div>
    </ThemeProvider>
  );
}

export default App;
