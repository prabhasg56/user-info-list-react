import React, { useState } from "react";
import "./UserForm.css";
import UserList from "./UserList";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  };

  const addAge = (e) => {
    setAge(e.target.value);
  };

  const userData = (e) => {
    e.preventDefault();
    setName('');
    setAge('');
    
    props.userLists(name, age);

  };

  return (
    <>
      <form onSubmit={userData}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>Username</label>
            <input value={name} onChange={addName} />
          </div>
          <div className="new-user__control">
            <label>Age(Years)</label>
            <input value={age} onChange={addAge} />
          </div>
          <button className="btn">Add User</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
