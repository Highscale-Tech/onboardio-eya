// SignIn.js
import React, { useState } from 'react';
import chillImage from '../../images/unsplash_mi7W_V4slxg.png';
import { Navigate, useNavigate } from 'react-router-dom';
import {useAuth} from '../../contexts/authContext'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth'
import { Link } from 'react-router-dom'
const SignIn = () => {
  const {userLoggedIn}=useAuth()
  const [email, setEmail] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [password, setPassword] = useState('');
  const [errormsg, setErrormsg] = useState('');
 
  const handleSubmit =async (e) => {
    e.preventDefault()
    if(!isSigningIn) {
        setIsSigningIn(true)
        await doSignInWithEmailAndPassword(email, password)
        // doSendEmailVerification()
    }
    console.log('Sign-in submitted:', { email, password });

  };

  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if (!isSigningIn) {
        setIsSigningIn(true)
        doSignInWithGoogle().catch(err => {
            setIsSigningIn(false)
        })
    }
}

  const separateLetters = (text) => {
    return Array.from(text).map((letter, index) => (
      <span key={index} style={letterStyle}>
        {letter}
      </span>
    ));
  };

  const letterStyle = {
    display: 'inline-block',
    marginRight: '5px', // Adjust the spacing between letters
  };

  const signInStyle = {
    height: '100vh',
    background: 'linear-gradient(to right, white, rgba(178, 218, 255, 1), white)',
  };

  const groupStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };

  const onbordioSectionStyle = {
    textAlign: 'left',
    padding: '40px',
    marginTop: '0px',
    marginLeft: '30px',
    fontSize: '30px',
    overflow: 'visible',
    filter: 'drop-shadow(0px 4px 4px #00000040)',
    fontFamily:
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
  };

  const imageSectionStyle = {
    textAlign: 'left',
    position: 'relative',
  };

  const imageStyle = {
    width: '400px',
    height: 'auto',
    marginTop: '50px',
    position: 'relative',
    zIndex: '2',
    background:
      'linear-gradient(rgba(178, 218, 255, 0.8), rgba(178, 218, 255, 0.2)), url("../../images/unsplash_mi7W_V4slxg.png")',
    backgroundSize: 'cover',
  };

  const h2Style = {
    fontSize: '30px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '8px',
    marginBottom: '10px',
    height: '50px',
    width: '400px',
    borderRadius: '43px',
    borderColor: 'rgba(0, 72, 151, 1)',
  };

  const buttonStyle = {
    padding: '10px',
    height: '65px',
    width: '410px',
    borderRadius: '43px',
    backgroundColor: 'rgba(178, 218, 255, 1)',
    color: 'rgb(3, 4, 4)',
    borderColor: ' rgba(0, 72, 151, 1)',
    cursor: 'pointer',
    border:'2px solid',
    fontSize: '1em',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold',
  };

  const buttonHoverStyle = {
    backgroundColor: 'rgb(241, 241, 241)',
  };

  return (
    <div style={signInStyle}>
      {userLoggedIn&&(<Navigate to={'/onboardio'} replace={true} />)}
      <div style={onbordioSectionStyle}>{separateLetters('ONBOARDIO')}</div>
      <div style={groupStyle}>
        <div style={imageSectionStyle}>
          <img src={chillImage} alt="chill" style={imageStyle} />
        </div>
        <div>
          <h2 style={h2Style}>Good Morning!</h2>
          <form onSubmit={handleSubmit} style={formStyle}>
            <button style={buttonStyle}  
              disabled={isSigningIn}
              onClick={(e) => {
                onGoogleSignIn(e);
              }}

              className={`w-80 text-black bg-blue-400 rounded-full  flex items-center justify-center gap-x-3 py-2.5 border text-sm font-medium  ${
                isSigningIn
                  ? "cursor-not-allowed"
                  : "hover:bg-blue-300 transition duration-300 active:bg-gray-100"
              }`}
            >
               {isSigningIn ? "Signing In..." : "Connect with Google"}
              Connect with Google</button>
            <br />
            <label>
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <br />
            <Link> <button type="submit" style={buttonStyle}    disabled={isSigningIn}  >  {isSigningIn ? "Signing In..." : "Sign In"} Enter</button> </Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
