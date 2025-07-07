import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function DynamicForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const initialValues = {
    users: [
      { name: '', email: '' }
    ]
  };

  const validationSchema = Yup.object({
    users: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
      })
    )
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Form submitted:', values);
        setSubmitted(true);
        setSubmittedValues(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <>
          <Form>
            <FieldArray name="users">
              {({ push, remove }) => (
                <div>
                  {values.users.map((user, index) => (
                    <div key={index} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
                      <div>
                        <label>Name</label>
                        <Field name={`users[${index}].name`} />
                        <ErrorMessage name={`users[${index}].name`} component="div" style={{ color: 'red' }} />
                      </div>
                      <div>
                        <label>Email</label>
                        <Field name={`users[${index}].email`} />
                        <ErrorMessage name={`users[${index}].email`} component="div" style={{ color: 'red' }} />
                      </div>
                      <button type="button" onClick={() => remove(index)} disabled={values.users.length === 1}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({ name: '', email: '' })}>
                    Add User
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
          </Form>
          {submitted && submittedValues && (
            <div style={{ marginTop: '1rem', color: 'green' }}>
              <h4>Form submitted successfully!</h4>
              <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </Formik>
  );
}
