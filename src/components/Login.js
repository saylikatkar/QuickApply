import React from 'react';

export default function Login({ onView }) {
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Mock login successful');
    onView('home');
  };

  return (
    <div className="container" style={{maxWidth:450}}>
      <div className="card p-5 shadow-lg text-center">
        <i className="bi bi-person-circle text-primary display-4 mb-3"></i>
        <h1 className="fw-bold mb-4">Member Login</h1>
        <form onSubmit={handleLogin} id="login-form">
          <div className="mb-3"><input className="form-control form-control-lg" placeholder="Email Address" required /></div>
          <div className="mb-3"><input className="form-control form-control-lg" placeholder="Password" type="password" required /></div>
          <button type="submit" className="btn btn-primary btn-lg w-100 mt-2">Login</button>
        </form>
      </div>
    </div>
  );
}
