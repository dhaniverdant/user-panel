/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getSingleUser } from '../redux/actions';

const EditUser = () => {
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  });
  const [error, setError] = useState("");
  let history = useHistory();
  let dispatch = useDispatch();
  let { id } = useParams();
  const { user } = useSelector(state => state.allUsersData);
  // const { user } = useSelector((userDetail) => userDetail.data);
  const { name, email, contact, address } = userDetail;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetail.name || !userDetail.email || !userDetail.contact || !userDetail.address) {
      setError("Please fill all input field");
    } else {
      dispatch(editUser(userDetail, id));
      history.push("/");
      setError("");
    }
  }

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setUserDetail({ ...user });
    }
  }, [user]);

  return (
    <div className="row">
      <h2>Edit User</h2>
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
              value={name || ""}
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
              value={email || ""}
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
              value={contact || ""}
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
              value={address || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="address">Address</label>
          </div>
        </div>
        <button
          className="waves-effect waves-light btn-large"
          type="submit"
        >
          Update User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
