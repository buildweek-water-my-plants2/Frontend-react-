import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "../src/Components/Navbar";
import LogInForm from "./Components/Log-in_Sign-up/LogInForm";
import Signup from "./Components/Log-in_Sign-up/Signup";
import PrivateRoute from "../src/Utils/PrivateRoute";
import Dashboard from "./Components/Plants/Dashboard";
import { axiosWithAuth } from "../src/Utils/axiosWithAuth";
import { UserContext } from "../src/Contexts/plantContext";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false;
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/SignIn">
          <LogInForm userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>

        <Route path="/">
          <Signup userInfo={userInfo} setUserInfo={setUserInfo} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
