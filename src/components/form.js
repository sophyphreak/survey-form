import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik';

// todo: switch to formik because duh

const TheForm = () => (
      <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: '', email: '', id: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
        <label>Name:</label>
        <div>
        <Field type="text" name="name" id="name" />
        </div>
        <br/>
        <label>Email:</label>
        <div>
        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" component="div" />
        </div>
        <br/>
        <label>Password:</label>
        <div>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        </div>
        <br/>
        <div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default TheForm
