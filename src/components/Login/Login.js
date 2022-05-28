import React, { useState } from "react";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

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