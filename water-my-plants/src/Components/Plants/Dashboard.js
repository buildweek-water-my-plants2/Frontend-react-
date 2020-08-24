import React, { useState, useEffect, useContext } from "react";

import { axiosWithAuth } from "../../Utils/axiosWithAuth";

import Plant from "../Plant/Plant";
import { PlantContext } from "../../Contexts/plantContext";
import emptyPot from "./Empty-pot.svg";

const PlantDashboard = () => {
  const { plant } = useContext(PlantContext);

  return (
    <div>
      <h1>Welcome, {plant.user_id}</h1>
      <Plant />
    </div>
  );
};

export default PlantDashboard;

// export default function Dashboard(props) {
//   const { userInfo } = props;
//   // console.log(userInfo)
//   return (
//     <DashDiv>
//       <DashHeader>
//         <H3>Welcome, </H3>
//       </DashHeader>
//       <Plant>
//         <AddContainer>
//           <Img src={emptyPot} />
//           <Button>Add a Plant</Button>
//         </AddContainer>
//         <PlantsList>{/* list of plants here */}</PlantsList>
//       </Plant>
//     </DashDiv>
//   );
// }
