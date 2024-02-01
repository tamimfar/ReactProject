import React, { useState } from "react";
import data from "../Data.json";
const Users = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="userPage">
      <form>
        <input
          className="search"
          type="text"
          placeholder="search contacts"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <table id="customers">
        <tr>
          <th>Number</th>
          <th>Profile</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          })
          .map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.img} alt="" />
              </td>
              <td>{item.first_name}</td>
              <td>{item.email}</td>
              <td>{item.Phone}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Users;
