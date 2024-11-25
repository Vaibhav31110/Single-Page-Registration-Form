import React, { useState } from 'react';
import './App.css';

export default function From() {
 // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default from submission

    if(name === ''  ||  email === ''  ||  password === '') {
      alert("please enter all the fields");
    }else{
      setSubmitted(true);
    }
  };

  // Showing success message
  const SucessMessage = () => {
    if (submitted) {
      return (
        <div className="Success">
          <h1>User {name} suceefully registered!!</h1>
        </div>
      );
    }
    return null; //No message if not submitted
  };

  return(
    <div className='from'>
      <h1>Login to bagepalli websilt</h1>

      {/* ClassName the method*/}
      <div className='message'>
        <SucessMessage/>
      </div>

      <from onsubitted={handleSubmit}>
        <fieldset>
          {/* Label and input for form data */}
          <label className="label"> Name </label>
          <input onChange={handleName} className="input" value={name} type="text" /><br />

          <label className="label"> Email </label>
          <input onChange={handleEmail} className="input" value={email} type="email" /><br />

          <label className="label"> Password </label>
          <input onChange={handlePassword} className="input" value={password} type="password" /><br />

          <button className="b+n" type="Subitted">Submitted</button>
        </fieldset>
      </from>
    </div>
  );
}