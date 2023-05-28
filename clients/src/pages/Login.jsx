import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password :</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;