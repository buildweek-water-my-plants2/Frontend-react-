import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";

const CreatePlantBox = styled.div`
  margin: 30px 40px 0px 380px;
  justify-content: center;
  background: #2d3142;
  color: black;
  width: 40%;
  height: 50vh;
  border: 4px solid #ef8354;
  border-radius: 25%;
  color: white;
`;

const PlantInputField = styled.div`
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

const S = styled.div`
  border: 2px solid #ef8354;
  background: #2d3142;
  color: #bfc0c0;
  width: 40%;
  margin: 0 auto;
`;

/api/plants/:id

const CreatePlant = ({ plant, setPlants, plants }) => {
    const [edit, toggleEdit] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => editPlant(plant.id, data);
    console.log(errors);

    const editPlant = (id, updatePlant) => {
        axiosWithAuth()
            .put(`/api/plants/${id}`, updatedPlant)
            .then((res) => {
                console.log(res.data);
                setPlants(
                    plants.map((plant) => {
                        if (plant.id === id) return res.data[0];
                        return ticket;
                    })
                );
                toggleEdit(!edit);
            })
            .catch((err) => {
                console.log(err, "Failed to edit Plant");
            });
    };

    const deletePlant = (id) => {
        axiosWithAuth()
            .delete(`/api/plants/${id}`)
            .then((res) => {
                console.log(res);
                setPlants(plants.filter((plant) => plant.id !== id));
            })
            .catch((err) => {
                console.log(err, "Failed to delete Plant");
            });
    };

    return edit === false ? (
        <S>
            <div>
                <h2>
                    {plant.title} {plant.description} {plant.tried} {plant.category}
                </h2>
                <button onClick={() => deletePlant(plant.id)}>Delete</button>
                <button onClick={() => toggleEdit(!edit)}>Edit</button>
            </div>
        </S>
    ) : (
        <div>
            <CreatePlantBox>
            <form onSubmit={handleSubmit(onSubmit)}>
          <StudentInputField>
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

            <input className="forms" type="submit" />
          </StudentInputField>
        </form>

        <button onClick={() => toggleEdit(!edit)}>Cancel</button>
            </CreatePlantBox>
        </div>
    );

};

export default CreatePlant;