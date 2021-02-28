import React from 'react';

const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const res = await fetch(url);
  const user = await res.json();

  return user;
    // <div>
    //   <h1>'usuario volviendo de la api' {user} </h1>
    // </div>
}

export default getUser;