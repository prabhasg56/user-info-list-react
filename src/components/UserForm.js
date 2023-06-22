import React, { useState, useRef } from "react";
import "./UserForm.css";
import ErrorModal from "./Modal/ErrorModal";
import Wrapper from "./Halper/Wrapper";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const collegeName = useRef();

  const addName = (e) => {
    setName(e.target.value);
  };

  const addAge = (e) => {
    setAge(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const college = collegeName.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid input", msg: "Please enter user details!" });
      setModalOpen(true);
    } else if (parseInt(age) <= 0) {
      setError({ title: "Invalid input", msg: "Please enter valid age(>0)" });
      setModalOpen(true);
    } else {
      props.userLists(name, age, college);
    }

    setName("");
    collegeName.current.value = '';
    setAge("");
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal Open={modalOpen} close={setModalOpen} error={error} />
      )}
      <form onSubmit={onFormSubmit}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>Username</label>
            <input value={name} onChange={addName} />
          </div>
          <div className="new-user__control">
            <label>College Name</label>
            <input ref = {collegeName}/>
          </div>
          <div className="new-user__control">
            <label>Age(Years)</label>
            <input value={age} type="number" onChange={addAge} />
          </div>
          <button className="btn">Add User</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserForm;
