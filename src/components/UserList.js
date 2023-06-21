import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="new-user__lists">
      <ul>
        {props.userLists.map((value, key) => {
          return (
            <li key = {key} className="new-user__list">
              {value.name} {value.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
