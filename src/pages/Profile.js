import React, { useEffect, useState } from 'react';
import '../css/profile.css';
import axios from 'axios';

const Actu = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <div className='container'>
        <div className='card'>
          <div className='details'>
            <div className='image'>
              {users.map((user) => {
                return (
                  <>
                    <img src={user.images} alt='user' />
                  </>
                );
              })}
            </div>
            <div className='profile'>
              {users.map((user) => (
                <>
                  <h2>{user.username}</h2>
                  <div className='spec'>
                    <span>{user.job}</span>
                    <br />
                    <span>{user.city}, {user.country}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <h5>Recents Posts</h5>
          {users.map((user) => {
            return (
              <>
                <p>{user.post}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Recent_posts = () => {};
export default function Profile() {
  return (
    <main>
      <Actu />
      <Recent_posts />
    </main>
  );
}
