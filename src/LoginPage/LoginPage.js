import React from "react";
import "./LoginPage.css";
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="Login">
      <div className="Facebook">
        <div className="facebook-text">facebook</div>
        <div className="title">
          Facebook helps you connect and share <br /> with the people in your
          life.
        </div>
      </div>
      <div className="login-container">
        <div className="login-details">
          <input type="email" placeholder="Email address or Phone number" /><br />
          <input type="password" placeholder="Password" />
          <br />
          <br />
          <button className="btn">
            <link to="./HeaderArea">Login</link>
          </button>
          <div className="forgotten-password">
            <a href="forget">Forgotten Password</a>
          </div>
          <br />
        </div>
        <br />
        <div className="create">
          <button className="btns">
            Create New Account
          </button>
          <br />
        </div>

        <p></p>
        <br />
        <div className="Page">
          <a href="createPage">Create a Page</a> for a celebrity, brand or business.
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
