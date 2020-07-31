import React, { useState } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PlantBox = styled.div`
  margin: 30px 40px 0px 380px;
  justify-content: center;
  background: #2d3142;
  color: black;
  width: 40%;
  height: 70vh;
  border: 4px solid #ef8354;
  border-radius: 25%;
  color: white;
`;

const PlantInput = styled.div`
  flex-direction: column;
  justify-content: space-betwen;
  padding: 10px;
  margin: 10% auto 10% auto;
  width: 40%;
`;

const Button = styled.button`
  background: #ef8354;
  height: 30px;
  width: 150px;
  border-radius: 20%;
`;

const deletePlant = (id, refreshPlant) => {
    axiosWithAuth()
      .delete(`/api/tickets/${user_Id}`)
      .then((res) => {
        console.log("Plant Deleted");
        refreshStudent();
      })
      .catch((err) => {
        console.log(err, "Failed to delete Plant);
      });
  };
