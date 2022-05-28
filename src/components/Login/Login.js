import React, { useState } from "react";
import "./style.css";

function Login() {
  return (
    <div className="form">
      <div className="form-body">
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input className="form__input" type="text" id="email" placeholder="Email"/>
        </div>
        <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
        </div>
        <div class="footer">
                <button type="submit" class="btn">Log in</button>
        </div>
      </div>
    </div>
  );
}
export default Login;