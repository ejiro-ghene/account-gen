import "./App.css";
import "./output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./components/widget/Sidebar";
// import "./components/widget/Navbar";
// import "./pages/auth/Registration";

//PAGES
import { Dashboard } from "./pages";
import { Landing } from "./pages";
import { Login } from "./pages";
import { Signup } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
