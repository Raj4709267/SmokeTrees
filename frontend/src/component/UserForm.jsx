import React, { useState } from "react";
import styles from "./UserForm.module.css";
const UserForm = ({ addUser, isLoading }) => {
  const [user_name, setUserName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ user_name, address });
    setUserName("");
    setAddress("");
  };

  return (
    <div className={styles.main_container}>
      <h1 className={styles.heading}>Add user details</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="User Name"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {isLoading ? "Submiting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
