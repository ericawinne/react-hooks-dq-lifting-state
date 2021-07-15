import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [userId, setUserId] = useState(users[0].id)

  const handleChangeUser = (user) => {
    setUserId(user.id)
  }
  const updatedMoreUser = () => {
  const updatedUsers = users.map((user) => { if (user.id !== userId) return user
    return {...user}
  })

    setUsers(updatedUsers)
}

  const grabUserId = users.find((user) => user.id===userId)

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onChangeUser={handleChangeUser} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={grabUserId} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
