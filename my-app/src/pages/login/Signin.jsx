import React, { useRef, useEffect, useState  } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import "parsleyjs";
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/reducers/loginSlice';
import {login} from '../../store/reducers/loginSlice'

function SignInForm() {

  const [username, setUserNumber] = useState('');
  const [password, setPassword] = useState('');

  const formRef = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);
  const navigate = useNavigate(); 
  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (formRef.current) {
      const parsleyInstance = $(formRef.current).parsley();
      if (parsleyInstance) {
        parsleyInstance.validate();
        if (parsleyInstance.isValid()) {

     dispatch(login({ username, password }));
    if (!error) {
  
      navigate('/');
    }
  };
        } else {
          console.log('Form validation failed');
        }
      }
    }
  

  useEffect(() => {
    if (formRef.current) {
      $(formRef.current).parsley();
    }
  }, []);


  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} ref={formRef}>
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
          type="number"
          placeholder="Number"
          name="number"
          value={username}
          onChange={(e) => setUserNumber(e.target.value)}
          required
          data-parsley-trigger="change"
          data-parsley-required-message="Number is required."
          data-parsley-pattern="^\d{10}$"
          data-parsley-pattern-message="Please enter a valid 10-digit Number."
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-parsley-trigger="change"
          data-parsley-required-message="Password is required."
          data-parsley-type-message="Please enter a valid Password."
        />
        <Link to="/reset">Forgot your password?</Link>
        <button type="submit" >Sign In</button>
      </form>
    </div>
  );
  }

export default SignInForm;
