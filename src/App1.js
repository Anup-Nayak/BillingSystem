import './ContractMasterForm.css';
import React, { useState } from 'react';
import axios from 'axios';
function Form() {
  const [contractNo, setcontractNo] = useState('');
  const [contractName, setcontractName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Node.js server
      await axios.post('http://localhost:3001/submit-form', { contractNo, contractName });
      alert('Form submitted successfully!');
      // Clear form fields after successful submission
      setcontractNo('');
      setcontractName('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="contract-form-container">
      <h2>Contract Master Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="first">
          <div className="form-group">
            <label>Contract No
            <input type="text" name={contractNo} onChange={(e) => setcontractNo(e.target.value)} />
            </label>
          </div>
          <div className="form-group"> 
            <label>Contract Name
            <input type="text" name={contractName} onChange={(e) => setcontractName(e.target.value)} />
            </label>
          </div>
          </div>
        <button type="submit-form">Submit</button>
      </form>
    </div>
  );
  };
export default Form;