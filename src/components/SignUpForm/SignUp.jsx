import React, { useState } from 'react'
import './SignUp.css';

import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png';


const SignUp = () => {

    const [action, setAction] = useState('Sign Up');


  return (
    <div className="container">
    <h1 className='nexus'> Nexus </h1>
        <div className="header">
            <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action === "Log In" ? <div></div> : 
              <div className="input">
              <img src={person} alt="Name" />
              <input type="text" placeholder='Full Name'/>
          </div>
            }
          
            <div className="input">
                <img src={email} alt="email" />
                <input type="email"  placeholder='E Mail'/>
            </div>
            <div className="input">
                <img src={password} alt="password" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forget-password">Forgot Password ? <span>Click Me</span></div>
}
        <div className="submit-container">
            <div className={action === 'Log In' ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className= {action === 'Sign Up' ? "submit gray" : "submit"} onClick={ () => { setAction("Log In")}}> Log In</div>
        </div>
    </div>
  )
}

export default SignUp