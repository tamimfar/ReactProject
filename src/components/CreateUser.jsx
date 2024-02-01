import React, { useState ,useContext } from "react";
import { UserContext } from "../context/UserContext";
import Alluser from "./Alluser";
const CreateUser = () => {
	const {create, setCreate} = useContext(UserContext)
  const hendeler = (e) => {
    const { name, value } = e.target;
    setCreate((Prev) => {
      return { ...Prev, [name]: value };
    });
  };
 
  const hendleSubmit = (event) => {
	  event.preventDefault();
	   setCreate(create)
	 
  };

  return (
    <div className="createuser">
      <form onSubmit={hendleSubmit}>
        <h3>ID :</h3>
        <input type="text" name="id" onChange={hendeler} />
        <h3>Name :</h3>
        <input type="text" name="name" onChange={hendeler} />
        <h3>Email :</h3>
        <input type="email" name="email" onChange={hendeler} />
        <h3>Phon :</h3>
        <input type="text" name="phon" onChange={hendeler} />
        <br />
        <button type="submit">submit</button>
      </form>
     
    </div>
  );
};

export default CreateUser;
