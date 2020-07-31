import React, { useState, createContext } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

export const UserContext = createContext();
export const PlantContext = createContext();

export const AppProvider = (props) => {
  const [user, setUser] = useState([]);
  const [plant, setPlant] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PlantContext.Provider value={{ plant, setPlant }}>
        {props.children}
      </PlantContext.Provider>
    </UserContext.Provider>
  );
};
