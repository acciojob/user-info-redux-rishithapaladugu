import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setUserEmail } from "./feature/UserInfoSlice";

const UserInformation = () => {
  const userName = useSelector((state) => state.userInfo.name);
  console.log(userName);
  const userEmail = useSelector((state) => state.userInfo.email);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User Information</h1>
      <label htmlFor="name-info">Name: </label>
      <input
        type="text"
        id="name-info"
        value={userName}
        onChange={(e) => dispatch(setUserName(e.target.value))}
      />
      <br />
      <label htmlFor="email-info">Email: </label>
      <input
        type="email"
        id="email-info"
        value={userEmail}
        onChange={(e) => dispatch(setUserEmail(e.target.value))}
      />

      <div className="output">Name - {userName}</div>
      <div className="output">Email - {userEmail}</div>
    </div>
  );
};

export default UserInformation;
