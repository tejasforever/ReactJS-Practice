
import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function DynamicTicketForm() {
  const [inputCount, setInputCount] = useState(1); // for the number field
  const [ticketCount, setTicketCount] = useState(1); // for actual tickets to show

  const initialValues = {
    tickets: Array(ticketCount).fill().map(() => ({
      name: '',
      age: '',
      email: '',
      phone: '',
      address: '',
      city: ''
    }))
  };

  const validationSchema = Yup.object({
    tickets: Yup.array().of(
      Yup.object({
        name: Yup.string().required('Name is required'),
        age: Yup.number().typeError('Age must be a number').required('Age is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone is required')
            .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
            .min(10, 'Must be at least 10 characters')
            .max(15, 'Must be 15 characters or less'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
      })
    )
  });

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Number of Tickets: </label>
        <input
          type="number"
          min="1"
          value={inputCount}
          onChange={e => setInputCount(Math.max(1, Number(e.target.value)))}
        />
        <button
          type="button"
          style={{ marginLeft: '1rem' }}
          onClick={() => setTicketCount(inputCount)}
        >
          Add Ticket
        </button>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('Tickets submitted:', values);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="tickets">
              {() => (
                <div>
                  {values.tickets && values.tickets.length > 0 && values.tickets.map((ticket, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
                      <h4>Ticket {index + 1}</h4>
                      <div>
                        <label>Name</label>
                        <Field id={`name-${index}`} name={`tickets[${index}].name`} />
                        <ErrorMessage name={`tickets[${index}].name`} component="div" style={{ color: 'red' }} />
                      </div>
                      <div>
                        <label>Age</label>
                        <Field id={`age-${index}`} name={`tickets[${index}].age`} />
                        <ErrorMessage name={`tickets[${index}].age`} component="div" style={{ color: 'red' }} />
                      </div>
                      <div>
                        <label>Email</label>
                        <Field id={`email-${index}`} name={`tickets[${index}].email`} />
                        <ErrorMessage name={`tickets[${index}].email`} component="div" style={{ color: 'red' }} />
                      </div>
                      <div>
                        <label>Phone</label>
                        <Field id={`phone-${index}`} name={`tickets[${index}].phone`} />
                        <ErrorMessage name={`tickets[${index}].phone`} component="div" style={{ color: 'red' }} />
                      </div>
                      <div>
                        <label>Address</label>
                        <Field id={`address-${index}`} name={`tickets[${index}].address`} />
                        <ErrorMessage name={`tickets[${index}].address`} component="div" style={{ color: 'red' }} />
                      </div>
                      <div>
                        <label>City</label>
                        <Field id={`city-${index}`} name={`tickets[${index}].city`} />
                        <ErrorMessage name={`tickets[${index}].city`} component="div" style={{ color: 'red' }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
            {ticketCount > 0 && <button type="submit">Submit</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
