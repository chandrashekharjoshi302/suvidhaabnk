import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css"
import "parsleyjs";
import $ from "jquery";
import { useDispatch } from "react-redux";
import {signup} from "../../store/reducers/signupSlice.js"

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    if (formRef.current) {
      const parsleyInstance = $(formRef.current).parsley();
      if (parsleyInstance) {
        parsleyInstance.validate();
        if (parsleyInstance.isValid()) {
          dispatch(signup({ name, email, number, password }));
          console.log("Form submitted");
        } else {
          console.log("Form validation failed");
        }
      }
    }
  };

  useEffect(() => {
    if (formRef.current) {
      $(formRef.current).parsley();
    }
  }, []);

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} ref={formRef}>
        <h1>Create Account</h1>

        <div className="social-container">
          <Link to="#" className="social">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to="#" className="social">
            <i className="fab fa-google-plus-g" />
          </Link>
          <Link to="#" className="social">
            <i className="fab fa-linkedin-in" />
          </Link>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          required
          data-parsley-trigger="change"
          data-parsley-required-message="Name is required."
          data-parsley-type-message="Please enter a valid Name."
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          required
          data-parsley-trigger="change"
          data-parsley-required-message="Email is required."
          data-parsley-type-message="Please enter a valid Email."
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          placeholder="Number"
          required
          data-parsley-trigger="change"
          data-parsley-required-message="Number is required."
          data-parsley-type-message="Please enter a valid Number."
          data-parsley-pattern="^\d{10}$"
          data-parsley-pattern-message="Please enter a 10-digit number."
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
          data-parsley-trigger="change"
          data-parsley-required-message="Password is required."
          data-parsley-type-message="Please enter a valid Password."
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
