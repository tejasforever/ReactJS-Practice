import React from 'react'
import { Field, Form, Formik } from 'formik'
import Checkbox from '@mui/material/Checkbox';


export default function MyInformation() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', address: '', city: '', gender: '', checked: [] }}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <Field name="firstName" placeholder="First Name" />
                    <Field name="lastName" placeholder="Last Name" />
                    <Field name="email" placeholder="Email" />
                    <Field name="address" as="textarea" className="form-textarea" />
                    <Field name="city" as="select" className="my-select">
                        <option value="vadodara">Vadodara</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="surat">Surat</option>
                    </Field>
                    <label>
                        <Field type="radio" name="gender" value="Male" />
                        Male
                    </label>
                    <label>
                        <Field type="radio" name="gender" value="Female" />
                        Female
                    </label>

                    {/* Material UI Checkbox Group */}
                    <div>
                        <label>Checkbox Group:</label>
                        <div>
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

                    <input type="submit" value="Submit" />
                </Form>
            )}
        </Formik>
    )
}