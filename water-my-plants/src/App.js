import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "../src/Components/Navbar";
import LogInForm from "./Components/Log-in_Sign-up/LogInForm";
import Signup from "./Components/Log-in_Sign-up/Signup";
import PrivateRoute from "../src/Utils/PrivateRoute";
import Dashboard from "./Components/Plants/Dashboard";
import { axiosWithAuth } from "../src/Utils/axiosWithAuth";
import { UserContext, PlantContext } from "../src/Contexts/plantContext";
import PlantCard from "./Components/Plant/PlantCard";
import styled from "styled-components";

const Title = styled.div`
  font-size: 3rem;
  margin: 5%, 0;
`;

function App() {
  const { setPlant } = useContext(PlantContext);

  useEffect(() => {
    const userId = localStorage.getItem("id");

    if (userId) {
      axiosWithAuth()
        .get(`/api/users/${id}`)
        .then((res) => {
          setPlant(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Title style={{ color: "#4F5D75" }}>Water My Plants</Title>
      <Route exact path="/" component={Signup} />
      <Route path="/SignIn" component={LogInForm} />
      <PrivateRoute path="/Dashboard" component={Dashboard} />
    </div>
  );
}

// function App() {
//   const [userInfo, setUserInfo] = useState([]);

//   useEffect(() => {
//     let token = localStorage.getItem("token")
//       ? localStorage.getItem("token")
//       : false;
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route path="/dashboard">
//           <Dashboard />
//         </Route>

//         <Route path="/SignIn">
//           <LogInForm userInfo={userInfo} setUserInfo={setUserInfo} />
//         </Route>

//         <Route path="/">
//           <Signup userInfo={userInfo} setUserInfo={setUserInfo} />
//         </Route>
//       </Switch>
//     </>
//   );
// }

export default App;
