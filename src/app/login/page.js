
'use client';

import { useState } from 'react';
import Router from 'next/router';
import styles from './login.module.css';  // Assume you have CSS styles defined

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Dummy authentication process
    if (username === 'uoftstudent' && password === 'securepassword') {
      // Redirect to the search and booking page upon successful login
      Router.push('/search');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>
    </div>
  );
}
