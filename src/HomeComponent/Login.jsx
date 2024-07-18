import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <label>
          <input type="email" placeholder="&nbsp;" />
          <span>Username</span>
        </label>
        <label>
          <input type="Password" placeholder="&nbsp;" />
          <span>Password</span>
        </label>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
