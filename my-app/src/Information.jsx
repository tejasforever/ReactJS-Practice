
// Information: Formik form using useFormik hook for form state management
// Demonstrates how to use useFormik for handling form values and submission
import { useFormik } from 'formik';
import React from 'react';

export default function Information() {
  // Initialize formik with initial values and submit handler
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      city: ''
    },
    onSubmit: values => {
      // Log form values on submit
      console.log('Form submitted with values:', values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* First Name field */}
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      {/* Last Name field */}
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      {/* Email field */}
      <div>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      {/* Password field */}
      <div>
        <label htmlFor="password">Your Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      {/* Confirm Password field */}
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
      </div>
      {/* Phone field */}
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </div>
      {/* Address field */}
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
      </div>
      {/* City field */}
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
