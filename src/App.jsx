import Top from "./Components/App/Top";
import Index from "./Components/App/Index";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { SnackBarProvider } from "./Context/snackBarContext";
import ComponentRoute from "./Components/ComponentRoute";
import Profile from "./Components/Auth/Profile";
import PasswordReset from "./Components/Auth/PasswordReset";
import SnackBar from "./Components/SnackBar";

function App() {
  return (
    <AuthProvider>
      <SnackBarProvider>
        <div className="App" style={{ width: "100%", height: "100%" }}>
          <Router>
            <Top />
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" component={Signup} />
              <ComponentRoute path="/profile" component={Profile} />
              <Route path="/forgot-password" component={PasswordReset} />
            </Switch>
          </Router>
        </div>
        <SnackBar />
      </SnackBarProvider>
    </AuthProvider>
  );
}

export default App;
