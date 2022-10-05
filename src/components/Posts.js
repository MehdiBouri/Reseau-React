import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (loading) {
      return <div>Chargement...</div>
    }
    axios
      .get('https://127.0.0.1:8000/api/posts')
      .then((data) => {
        setPosts(data.data['hydra:member']);
        console.log(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);


  useEffect(() => {
    setLoading(true);
    axios
      .get('https://127.0.0.1:8000/api/users')
      .then((data) => {
        setUsers(data.data['hydra:member']);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  });

  return (
    <>
      {posts.map((post) => (
        <div className='card'>
          <div className='row g-0'>
            <div className='col-2'>
              <Link
                to={`/profile/${post._id}`}
                key={post._id}
                style={{ textDecoration: 'none', color: '#5c5c5c' }}
              >
                {users.map((user) => (
                  <img
                    src={user.images}
                    className='w-100 rounded-circle'
                    alt={user.username}
                  />
                ))}
              </Link>
            </div>
            <div className='col-10'>
              <div className='card-body'>
                <div className='card-infos'>
                  <h5 className='card-title'>{post.content}</h5>
                  <small className='text-muted'>{post.publishedAt}</small>
                </div>
                <p className='card-text'>{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
