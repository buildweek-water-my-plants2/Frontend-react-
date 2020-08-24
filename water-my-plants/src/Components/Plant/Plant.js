import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import CreatePlant from "../Plant/CreatePlant";
import { PlantContext } from "../../Contexts/plantContext";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import PlantCard from "../Plant/PlantCard";
import styled from "styled-components";

const CreatePlantForm = styled.div`
  margin: 30px 40px 10% 380px;
  justify-content: center;
  background: #2d3142;
  color: black;
  width: 40%;
  height: 50vh;
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
  radius: 20%;
`;
const H2 = styled.h2`
  font-size: 2rem;
  color: #4f5d75;
`;

const Plant = (props) => {
  const [plant, setPlant] = useState([]);
  const [allPlants, setAllPlants] = useState([]);

  const postNewPlant = (newPlant) => {
    axiosWithAuth()
      .post("/api/plants", newPlant)
      .then((res) => {
        console.log(res.data);
        setAllPlants(res.data);
        setPlant(
          res.data.filter(
            (plant) => plant.created_by == localStorage.getItem("id")
          )
        );
      })
      .catch((err) => {
        console.log(err, "Failed to post new Plant");
      });
  };
  const refreshPlant = (props) => {
    const userId = localStorage.getItem("id");
    axiosWithAuth()
      .get(`/api/plants/${user}/${user_id}`)
      .then((res) => {
        console.log(res);
        setAllPlants(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const refreshAllPlants = (props) => {
    axiosWithAuth()
      .get("/api/plants")
      .then((res) => {
        console.log(res);
        setAllPlants(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    refreshPlant();
    refreshAllPlants();
  }, []);

  const submitPlant = (data) => {
    console.log(data);
    postNewPlant(data);
  };

  const { register, handleSubmit, errors } = useForm();
  console.log(errors);

  return (
    <>
      <CreatePlantForm>
        <form onSubmit={handleSubmit(submitTicket)}>
          <PlantInput>
            <input
              className="forms"
              type="text"
              placeholder="Title"
              name="title"
              ref={register({ required: true, min: 2, maxLength: 80 })}
            />
            <textarea
              name="description"
              placeholder="Description"
              ref={register({ required: true, max: 2, maxLength: 300 })}
            />
            <input
              className="forms"
              type="text"
              placeholder="Tried"
              name="tried"
              ref={register({
                required: true,
                min: 2,
                maxLength: 128,
              })}
            />
            <input
              className="forms"
              type="text"
              placeholder="Category"
              name="category"
              ref={register({ required: true, min: 2, maxLength: 128 })}
            />

            <Button className="forms" type="submit">
              Submit
            </Button>
          </PlantInput>
        </form>
      </CreatePlantForm>

      <div>
        <div className="plantList">
          {allPlants.map((plant) => {
            return <PlantCard {...plant} />;
          })}
          <h2>My Plants</h2>
          {PlantList.map((plant, index) => (
            <CreatePlant plant={plant} setPlants={setPlants} plants={plants} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Plant;
