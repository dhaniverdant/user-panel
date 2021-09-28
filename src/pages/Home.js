/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser, loadUsers } from '../redux/actions';

const Home = () => {
  let dispatch = useDispatch();
  const { users } = useSelector(state => state.allUsersData);
  let history = useHistory();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <a
        className="waves-effect waves-light btn-small"
        onClick={() => history.push("/addUser")}
      >
        Add User
      </a>
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.address}</td>
              <td>
                <a
                  className="waves-effect waves-light btn-small"
                  style={{ marginRight: "5px", backgroundColor: "red" }}
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </a>
                <a
                  className="waves-effect waves-light btn-small"
                  onClick={() => history.push(`/editUser/${user.id}`)}
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
