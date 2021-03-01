import React, { useState, useEffect, useCallback } from 'react';
import getPosts from './helpers/getPosts';
import getUser from './helpers/getUser';

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser()
      .then((newUser) => {
        setUser(newUser)
      })
  }

  const updatePosts = useCallback(() => {
    getPosts(user.id)
      .then((newPosts) => {
        setPosts(newPosts);
      })
  }, [user.id]);


  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (user?.id) {
      updatePosts();
    }
  }, [user, updatePosts]);

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <button onClick={updateUser}>
        Cambio de Usuario
      </button>
      <br />
      <h2>Posts - user: {user.id}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchCard;