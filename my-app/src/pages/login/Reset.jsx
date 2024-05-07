import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'parsleyjs';
import $ from 'jquery';
import "./login.css"
const Reset = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (formRef.current) {
      $(formRef.current).parsley();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formRef.current) {
      const parsleyInstance = $(formRef.current).parsley();
      if (parsleyInstance) {
        parsleyInstance.validate();
        if (parsleyInstance.isValid()) {
          // Your logic for handling form submission when valid
        }
      }
    }
  };

  function handleSignup() {
    navigate('/SignUp');
  }

  return (
    <div className='resetDiv'>
      <div className='form-container-reset'>
        <h1 style={{ textAlign: 'center' }}>Password Reset</h1>
        <form action="" className='formData' onSubmit={handleSubmit} ref={formRef}>
          <div className='resetImg'>
          <img src="https://suvidhaabnk.com/images/logo1.png" alt="" srcset="" />
          </div>
          
          <input type="password" placeholder='Current Password' required data-parsley-trigger="change" data-parsley-required-message="Current Password is required." />
          <input type="password" id="newPassword" placeholder='New Password' required data-parsley-trigger="change" data-parsley-required-message="New Password is required." />
          <input type="password" placeholder='Confirm Password' required data-parsley-trigger="change" data-parsley-required-message="Confirm Password is required." data-parsley-equalto="#newPassword" />
          <div className='resetBtn'>
            <button type='submit'>Reset Password</button>
            <button onClick={handleSignup}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
