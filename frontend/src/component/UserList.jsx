import React, { useEffect, useState } from "react";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={styles.main_container}>
      <h2 className={styles.heading}>User List</h2>
      <div className={styles.ul}>
        {users.map((user, index) => (
          <div className={styles.li} key={index}>
            <div className={styles.strong}>{user.userId.user_name}</div>{" "}
            {user.address}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
