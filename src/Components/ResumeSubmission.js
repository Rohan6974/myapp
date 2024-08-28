import React, { useState } from 'react';
import "./Rsumesubmissioon.css";

function ResumeSubmission() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, resume });
  };

  return (
    <div className="resume-submission">
      <h2>Submit Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Resume:</label>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} required />

        <button type="submit">Submit Resume</button>
      </form>
    </div>
  );
}

export default ResumeSubmission;