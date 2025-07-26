
// MyInformationExample: Shows a Formik form with custom validation logic (not using Yup)
// Demonstrates how to use Formik's validate prop for manual validation
// Also shows best practices for form field setup and error display
// You can add alternative validation (e.g., using Yup) below, with comments for reference
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function MyInformationExample() {
    // Custom validation function for Formik (manual, not using Yup)
    const validationSchema = (values) => {
        let error = {};
        // Validate first name
        if (!values.firstName) {
            error.firstName = 'Required';
        } else if (values.firstName.length < 2) {
            error.firstName = 'Must be at least 2 characters';
        } else if (values.firstName.length > 50) {
            error.firstName = 'Must be 50 characters or less';
        }
        // Validate last name
        if (!values.lastName) {
            error.lastName = 'Required';
        } else if (values.lastName.length < 2) {
            error.lastName = 'Must be at least 2 characters';
        } else if (values.lastName.length > 50) {
            error.lastName = 'Must be 50 characters or less';
        }
        // Validate email
        if (!values.email) {
            error.email = 'Required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
            error.email = 'Invalid email format';
        }
        // Validate password
        if (!values.password) {
            error.password = 'Required';
        } else if (values.password.length < 8) {
            error.password = 'Must be at least 8 characters';
        } else if (values.password.length > 100) {
            error.password = 'Must be 100 characters or less';
        }
        // Validate confirm password
        if (!values.confirmPassword) {
            error.confirmPassword = 'Required';
        } else if (values.confirmPassword !== values.password) {
            error.confirmPassword = 'Passwords must match';
        }
        // Validate phone
        if (!values.phone) {
            error.phone = 'Required';
        } else if (values.phone.length < 10) {
            error.phone = 'Must be at least 10 characters';
        } else if (values.phone.length > 15) {
            error.phone = 'Must be 15 characters or less';
        }
        // Validate address
        if (!values.address) {
            error.address = 'Required';
        } else if (values.address.length < 5) {
            error.address = 'Must be at least 5 characters';
        } else if (values.address.length > 100) {
            error.address = 'Must be 100 characters or less';
        }
        // Validate city
        if (!values.city) {
            error.city = 'Required';
        } else if (values.city.length < 2) {
            error.city = 'Must be at least 2 characters';
        } else if (values.city.length > 50) {
            error.city = 'Must be 50 characters or less';
        }
        return error;
    };

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phone: '', address: '', city: '' }}
            validate={validationSchema} // Using custom validation function
            onSubmit={values => {
                // ✅ This will log the form values on submit
                console.log('Form submitted with values:', values);
            }}
        >
            <Form>
                {/* First Name field with error message */}
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>
                {/* Last Name field with error message */}
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>
                {/* Email field with error message */}
                <div>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" autoComplete="username" />
                    <ErrorMessage name="email" component="div" />
                </div>
                {/* Password field with error message */}
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" autoComplete="new-password" />
                    <ErrorMessage name="password" component="div" />
                </div>
                {/* Confirm Password field with error message */}
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" />
                    <ErrorMessage name="confirmPassword" component="div" />
                </div>
                {/* Phone field with error message */}
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Field id="phone" name="phone" />
                    <ErrorMessage name="phone" component="div" />
                </div>
                {/* Address field with error message */}
                <div>
                    <label htmlFor="address">Address</label>
                    <Field id="address" name="address" />
                    <ErrorMessage name="address" component="div" />
                </div>
                {/* City field with error message */}
                <div>
                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" />
                    <ErrorMessage name="city" component="div" />
                </div>
                {/*
                  ❌ Wrong: <input type="submit" value="Submit" /> (does not always trigger Formik submit correctly)
                  ✅ Right: Use a button for submit
                  The input works here, but button is preferred for accessibility and consistency
                */}
                <input type="submit" value="Submit" />
                {/* <button type="submit">Submit</button> */}
            </Form>
        </Formik>
    );
}
