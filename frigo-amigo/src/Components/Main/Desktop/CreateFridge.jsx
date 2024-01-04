import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../UserContext';

const CreateFridge = (props) => {
  const [fridgeName, setFridgeName] = useState('');
  const user = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    let body = {
      name: fridgeName,
      ownerEmail: user.user.email,
    };

    axios
      .post('http://localhost:8080/fridge/create', body, { withCredentials: true })
      .then((response) => {
        console.log('Fridge created', response.data);
        body = {
          userEmail: user.user.email,
        };
        return axios.post('http://localhost:8080/user/getUserData', body, {
          withCredentials: true,
        });
      })
      .then((secondResponse) => {
        console.log(secondResponse.data);
        user.setUser(secondResponse.data);
        props.handleCloseCreateFridge();
      })
      .catch((error) => {
        console.log('Failed to create fridge', error);
      });
  };

  return (
    <div>
      <div className="dark"></div>
      <div className="frame">
        <button className="close-button btn-reset" onClick={props.handleCloseCreateFridge}>
          &#10005;
        </button>
        <form action="post" className="create-fridge-form flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="create-fridge-input nextart-400"
            placeholder="Введите название"
            value={fridgeName}
            onChange={(e) => setFridgeName(e.target.value)}
          />
          <button type="submit" className="create-fridge-btn manrope-400 btn-reset">
            Создать
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFridge;
