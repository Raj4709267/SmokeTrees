import React, { useEffect, useState } from "react";
import UserForm from "./component/UserForm";
import UserList from "./component/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = "http://localhost:8000";

  const getUsers = () => {
    axios
      .get(`${baseUrl}/api/userdetails`)
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const addUser = (newUser) => {
    setIsLoading(true);
    axios
      .post(`${baseUrl}/api/userdetails`, newUser)
      .then((data) => {
        getUsers();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <UserForm addUser={addUser} isLoading={isLoading} />
      <UserList users={users} />
    </div>
  );
}

export default App;
