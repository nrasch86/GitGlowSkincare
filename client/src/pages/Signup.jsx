import React, { useState } from 'react';
import "../CSS/Signup.css";

const Signup = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // State variable to track whether address form is open
  const [addressFormOpen, setAddressFormOpen] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle address form submission
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Perform address form submission logic here
    console.log(formData); // Output entire form data
    // Reset address fields after submission
    setFormData({
      ...formData,
      address: '',
      city: '',
      state: '',
      zipCode: ''
    });
    // Close the address form
    setAddressFormOpen(false);
  };

  // Function to handle main form submission (after address form is submitted)
  const handleSubmit = (e) => {
    e.preventDefault();
    // ADD LOGIC TO SEND TO SERVER
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {/* Main form for name, email, and phone number */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
        </div>
        <button type="button" onClick={() => setAddressFormOpen(true)}>Next</button>
      </form>

      {/* Address form */}
      {addressFormOpen && (
        <form onSubmit={handleAddressSubmit}>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code:</label>
            <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
