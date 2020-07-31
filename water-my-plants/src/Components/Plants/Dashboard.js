import React from "react";
import {
  AddContainer,
  Img,
  Button,
  DashDiv,
  DashHeader,
  H3,
  Plant,
  PlantsList,
} from "./PlantStyle";
import emptyPot from "./Empty-pot.svg";

export default function Dashboard(props) {
  const { userInfo } = props;
  // console.log(userInfo)
  return (
    <DashDiv>
      <DashHeader>
        <H3>Welcome, </H3>
      </DashHeader>
      <Plant>
        <AddContainer>
          <Img src={emptyPot} />
          <Button>Add a Plant</Button>
        </AddContainer>
        <PlantsList>{/* list of plants here */}</PlantsList>
      </Plant>
    </DashDiv>
  );
}
