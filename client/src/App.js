import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <div className="text-center">
            <h1 className="text-center py-5">Welcome To Home Page</h1>
            <p>We are about to implement MERN AUTHENTICATION !</p>
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
