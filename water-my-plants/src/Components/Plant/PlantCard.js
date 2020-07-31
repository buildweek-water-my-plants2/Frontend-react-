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
    .delete(`/api/plants/${id}`)
    .then((res) => {
      console.log("Plant Deleted");
      refreshStudent();
    })
    .catch((err) => {
      console.log(err, "Failed to delete Plant");
    });
};

const finalizeProject = (id, refreshPlant, plant, toggleEdit, edit) => {
  axiosWithAuth()
    .put(`/api/plants/${id}`, plant)
    .then((res) => {
      console.log("Plant Edited");
      toggleEdit(!edit);
      refreshPlant();
    })
    .catch((err) => {
      console.log(err, "Failed to edit plant");
    });
};

const PlantCard = ({ plant, refreshPlant }) => {
  const [edit, toggleEdit] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>
    finalizeProject(plant.id, refreshPlant, data, toggleEdit, edit);
  console.log(errors);

  return edit === false ? (
    <div>
      <h2>
        {plant.title} {plant.description} {plant.tried} {plant.category}
      </h2>
      <button onClick={() => deletePlant(plant.id, refreshPlant)}>
        Delete
      </button>
      <button onClick={() => toggleEdit(!edit)}>Edit</button>
    </div>
  ) : (
    <div>
      <PlantBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PlantInput>
            <input
              className=" forms"
              type="text"
              placeholder="Title"
              name="Title"
              ref={register({ required: true, min: 2, maxLength: 80 })}
            />
            <textarea
              name="Description"
              placeholder="Description"
              ref={register({ required: true, max: 2, maxLength: 300 })}
            />
            <input
              className=" forms"
              type="text"
              placeholder="Tried"
              name="Tried"
              ref={register({
                required: true,
                min: 2,
                maxLength: 128,
              })}
            />
            <input
              className=" forms"
              type="text"
              placeholder="Category"
              name="Category"
              ref={register({ required: true, min: 2, maxLength: 128 })}
            />

            <Button className="forms" type="submit">
              Submit
            </Button>
          </PlantInput>
        </form>
      </PlantBox>

      <button onClick={() => toggleEdit(!edit)}>Cancel</button>
    </div>
  );
};

export default PlantCard;
