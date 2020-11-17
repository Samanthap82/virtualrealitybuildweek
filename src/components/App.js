import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import LoginForm from "./LoginForm";
import Register from "./Register";
const initialFormValues = {
  username: "",
  userpassword: "",
  email: "",
  role: ""
};

export default function App() {
  return (
    <div className="container">
      <h1>Virtual Reality</h1>
      <p>Start Your Journey with Us Today</p>

      <Register />
    </div>
  );
}
