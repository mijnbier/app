import React, { useState } from "react";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          User: <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <br></br>
        <label>
          Pin: <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }