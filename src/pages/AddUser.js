/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

const AddUser = () => {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  });
  const [error, setError] = useState("");
  let history = useHistory();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetail.name || !userDetail.email || !userDetail.contact || !userDetail.address) {
      setError("Please fill all input field");
    } else {
      dispatch(addUser(userDetail));
      history.push("/");
      setError("");
    }
  }

  return (
    <div className="row">
      <h2>Add User</h2>
      {error && <p>{error}</p>}
      <form
        className="col s6"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="input-field col s8">
            <input
              id="name"
              type="text"
              name="name"
              className="validate"
              value={userDetail.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s8">
            <input
              id="email"
              type="email"
              name="email"
              className="validate"
              value={userDetail.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s8">
            <input
              id="contact"
              type="number"
              name="contact"
              className="validate"
              value={userDetail.contact}
              onChange={handleInputChange}
            />
            <label htmlFor="contact">Contact</label>
          </div>
          <div className="input-field col s8">
            <input
              id="address"
              type="text"
              name="address"
              className="validate"
              value={userDetail.address}
              onChange={handleInputChange}
            />
            <label htmlFor="address">Address</label>
          </div>
        </div>
        <button
          className="waves-effect waves-light btn-large"
          type="submit"
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default AddUser
