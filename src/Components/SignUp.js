import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, password });
  };


  const [ResumeName, setResumeName] = useState('');
  const [ResumeMail, setResumeMail] = useState('');
  const [resume, setResume] = useState(null);

  const HandleResume = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ ResumeName, ResumeMail, resume });
  };


  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Sign Up</button>
      </form>


      <div className="resume-submission">
      <h2>Submit Your Resume</h2>
      <form onSubmit={HandleResume}>
        <label>Name:</label>
        <input type="text" value={ResumeName} onChange={(e) => setResumeName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={ResumeMail} onChange={(e) => setResumeMail(e.target.value)} required />

        <label>Resume:</label>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} required />

        <button type="submit">Submit Resume</button>
      </form>
    </div>
    </div>
  );
}

export default SignUp;