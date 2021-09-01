import "./App.css";
import "./output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/widget/ProtectedRoute";
// import "./components/widget/Sidebar";
// import "./components/widget/Navbar";
// import "./pages/auth/Registration";

//PAGES
import { Dashboard } from "./pages";
import { Landing } from "./pages";
import { Login } from "./pages";
import { Signup } from "./pages";
import { Task } from "./pages";
// import { Proxyy } from "./pages";
import { Setting } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/task" component={Task} />
          {/* <Route path="/proxy" component={Proxyy} /> */}
          <Route path="/setting" component={Setting} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
