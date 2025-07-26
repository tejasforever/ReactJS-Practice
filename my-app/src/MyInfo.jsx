// MyInfo: Formik form with validation for user information.
// Uses Yup for validation schema. Shows how to use Formik's Form, Field, and ErrorMessage.
// You can add alternative validation or form handling code below, with comments for reference.
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export default function MyInfo() {
    // Validation schema for the form fields
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required')
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Must be 50 characters or less'),
        lastName: Yup.string().required('Required')
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Must be 50 characters or less'),
        email: Yup.string().email('Invalid email').required('Required')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
        password: Yup.string().required('Required')
            .min(8, 'Must be at least 8 characters')
            .max(100, 'Must be 100 characters or less'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phone: Yup.string().required('Required')
            // Alternative: Uncomment the line below to use phone number regex validation
            // .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
            .min(10, 'Must be at least 10 characters')
            .max(15, 'Must be 15 characters or less'),
        address: Yup.string().required('Required')
            .min(5, 'Must be at least 5 characters')
            .max(100, 'Must be 100 characters or less'),
        city: Yup.string().required('Required')
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Must be 50 characters or less'),
    });

    // Render the Formik form
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '', phone: '', address: '', city: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
                // ✅ This will log the form values on submit
                console.log('Form submitted with values:', values);
            }}
        >
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" />
                    <ErrorMessage name="password" component="div" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field id="confirmPassword" name="confirmPassword" type="password" />
                    <ErrorMessage name="confirmPassword" component="div" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <Field id="phone" name="phone" />
                    <ErrorMessage name="phone" component="div" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <Field id="address" name="address" />
                    <ErrorMessage name="address" component="div" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" />
                    <ErrorMessage name="city" component="div" />
                </div>
                {/* ❌ Wrong: <input type="submit" value="Submit" /> (does not always trigger Formik submit correctly) */}
                {/* ✅ Right: Use a button for submit */}
                <input type="submit" value="Submit" />
                {/* <button type="submit">Submit</button> */}
            </Form>
        </Formik>
    )
}
