import React, { useState, useEffect } from 'react';
import getUser from './helpers/getUser';

const initialUser = {
  name: "Ivan",
  email: "ivanugartem@gmail.com"
}

const FetchCard = () => {
  const [user, setUser] = useState(initialUser);

  const updateUser = () => {
    getUser()
      .then((newUser) => {
        setUser(newUser)
      })
  }

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  )
}

export default FetchCard;