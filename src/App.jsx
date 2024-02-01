import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./components/Users";
import Nav from "./components/Nav";
import CreateUser from "./components/CreateUser";
import Alluser from "./components/Alluser";
import { UserContext } from "./context/UserContext";
function App() {
  const [create, setCreate] = useState({
    id: "",
    name: "",
    email: "",
    phon: "",
  });
  return (
    <UserContext.Provider value={{create,setCreate}}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/about" element={<Alluser />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
