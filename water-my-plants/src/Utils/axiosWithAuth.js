// Updated list of endpoints including plant CRUD operations:
// baseurl: https://jswatermyplants-backend.herokuapp.com
// register user: https://jswatermyplants-backend.herokuapp.com/api/auth/register
// log in user: https://jswatermyplants-backend.herokuapp.com/api/auth/login
// add plant: https://jswatermyplants-backend.herokuapp.com/api/plants/user/:userid
// get list of plants for a user: https://jswatermyplants-backend.herokuapp.com/api/plants/user/:userid
// update plant: https://jswatermyplants-backend.herokuapp.com/api/plants/:id
// delete plant: https://jswatermyplants-backend.herokuapp.com/api/plants/:id
// update user: https://jswatermyplants-backend.herokuapp.com/api/users/:id (edited)

import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log(token);
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://jswatermyplants-backend.herokuapp.com",
  });
};
