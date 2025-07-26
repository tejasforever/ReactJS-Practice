
// MyInformation: Example of a Formik form with various input types and Material UI checkboxes
// Demonstrates use of Formik's Field, Form, and integration with Material UI Checkbox
// You can add alternative form handling or validation code below, with comments for reference
import React from 'react';
import { Field, Form, Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';

export default function MyInformation() {
    // Optional: label for accessibility, not used in this example
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', address: '', city: '', gender: '', checked: [] }}
            onSubmit={values => {
                // ✅ This will log the form values on submit
                console.log(values);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    {/* Text input for first name */}
                    <Field name="firstName" placeholder="First Name" />
                    {/* Text input for last name */}
                    <Field name="lastName" placeholder="Last Name" />
                    {/* Text input for email */}
                    <Field name="email" placeholder="Email" />
                    {/* Textarea for address */}
                    <Field name="address" as="textarea" className="form-textarea" />
                    {/* Dropdown select for city */}
                    <Field name="city" as="select" className="my-select">
                        <option value="vadodara">Vadodara</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="surat">Surat</option>
                    </Field>
                    {/* Radio buttons for gender selection */}
                    <label>
                        <Field type="radio" name="gender" value="Male" />
                        Male
                    </label>
                    <label>
                        <Field type="radio" name="gender" value="Female" />
                        Female
                    </label>

                    {/* Material UI Checkbox Group for multiple selection */}
                    <div>
                        <label>Checkbox Group:</label>
                        <div>
                            {/* Checkbox for 'One' */}
                            <Checkbox
                                checked={values.checked.includes('One')}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setFieldValue('checked', [...values.checked, 'One']);
                                    } else {
                                        setFieldValue('checked', values.checked.filter(val => val !== 'One'));
                                    }
                                }}
                                name="checked"
                                value="One"
                                inputProps={{ 'aria-label': 'One' }}
                            />
                            One
                            {/* Checkbox for 'Two' */}
                            <Checkbox
                                checked={values.checked.includes('Two')}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setFieldValue('checked', [...values.checked, 'Two']);
                                    } else {
                                        setFieldValue('checked', values.checked.filter(val => val !== 'Two'));
                                    }
                                }}
                                name="checked"
                                value="Two"
                                inputProps={{ 'aria-label': 'Two' }}
                            />
                            Two
                            {/* Checkbox for 'Three' */}
                            <Checkbox
                                checked={values.checked.includes('Three')}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setFieldValue('checked', [...values.checked, 'Three']);
                                    } else {
                                        setFieldValue('checked', values.checked.filter(val => val !== 'Three'));
                                    }
                                }}
                                name="checked"
                                value="Three"
                                inputProps={{ 'aria-label': 'Three' }}
                            />
                            Three
                        </div>
                    </div>

                    {/* Submit button for the form */}
                    <input type="submit" value="Submit" />
                </Form>
            )}
        </Formik>
    );
}