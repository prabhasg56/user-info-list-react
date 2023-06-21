import React, {useState} from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

const User = () => {
  const [enteredUser, setEnteredUser] = useState([]);

  const onSubmitHandle = (uName, uAge) => {
      setEnteredUser((prevUserList) => {
        return [...prevUserList, {name: uName, age: uAge}]
      })
  }

  return (
    <div>
      <UserForm userLists= {onSubmitHandle}/>
      <UserList userLists = {enteredUser}/>
    </div>
  );
};

export default User;
