import React from 'react'
import { Field, Form, Formik } from 'formik'


export default function MyInformation() {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', address: '', city: '', gender: '', toggle: true }}
            onSubmit={values => {
                console.log(values)
            }}
        >
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
                <label>
                    <Field type="checkbox" name="toggle" />
                    <div role="group" aria-labelledby="checkbox-group">
                        <label>
                            <Field type="checkbox" name="checked" value="One" />
                            One
                        </label>
                        <label>
                            <Field type="checkbox" name="checked" value="Two" />
                            Two
                        </label>
                        <label>
                            <Field type="checkbox" name="checked" value="Three" />
                            Three
                        </label>
                    </div>
                </label>
                <input type="submit" value="Submit" />
            </Form>
        </Formik>
    )
}