import React from 'react';
import { withFormik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';

const RawForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <label id="name-label">Name:</label>
    <div>
      <Field
        type="text"
        name="name"
        id="name"
        placeholder="enter your name, thanks :)"
      />
      <ErrorMessage name="name" component="div" />
    </div>
    <br />
    <label id="email-label">Email:</label>
    <div>
      <Field
        type="email"
        name="email"
        id="email"
        placeholder="enter your email, thanks :)"
      />
      <ErrorMessage name="email" component="div" />
    </div>
    <br />
    <label id="number-label">Number:</label>
    <div>
      <Field
        type="number"
        name="number"
        id="number"
        placeholder="enter some number"
      />
      <ErrorMessage name="number" component="div" />
    </div>
    <br />
    <div>
      <Field component="select" name="dropdown" id="dropdown">
        <option value="">please select one</option>
        <option value="i like dropdowns">i like dropdowns</option>
        <option value="i do not like dropdowns">i do not like dropdowns</option>
      </Field>
      <ErrorMessage name="dropdown" component="div" />
    </div>
    <br />
    <div name="radio-buttons-group">
      <div>
        <label>
          <Field
            type="radio"
            name="radio"
            value="i can code in react"
            checked={values.radio === 'i can code in react'}
          />
          i can code in react
        </label>
      </div>
      <div>
        <label>
          <Field
            type="radio"
            name="radio"
            value="i cannot code in react"
            checked={values.radio === 'i cannot code in react'}
          />
          i cannot code in react
        </label>
      </div>
      <div>
        <label>
          <Field
            type="radio"
            name="radio"
            value="i am also gene roddenberry's cousin"
            checked={values.radio === "i am also gene roddenberry's cousin"}
          />
          i am also gene roddenberry's cousin
        </label>
      </div>
    </div>
    <br />
    <div>
      <label>
        <Field type="checkbox" name="iceCream" checked={values.iceCream} />i
        like ice cream!
      </label>
    </div>

    <div>
      <label>
        <Field
          type="checkbox"
          name="cottonCandy"
          checked={values.cottonCandy}
        />
        i like cotton candy!
      </label>
    </div>

    <div>
      <label>
        <Field type="checkbox" name="cake" checked={values.cake} />i like cake!
      </label>
    </div>
    <br />
    <label>additional words here:</label>
    <div>
      <textarea name="additionalComments" />
    </div>
    <br />
    <div>
      <button type="submit" id="submit" disabled={isSubmitting}>
        Submit
      </button>
    </div>
  </Form>
);

const TheForm = withFormik({
  mapPropsToValues({
    name,
    email,
    number,
    dropdown,
    radio,
    iceCream,
    cottonCandy,
    cake,
    additionalComments
  }) {
    return {
      name: name || '',
      email: email || '',
      number: number || '',
      dropdown: dropdown || '',
      radio: radio || 'i can code in react',
      iceCream: iceCream || false,
      cottonCandy: cottonCandy || false,
      cake: cake || false,
      additionalComments: additionalComments || ''
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup
      .string()
      .email('email not valid')
      .required('email is required'),
    number: yup
      .number()
      .min(2, 'number must be more than 2')
      .max(8, 'number must be less than 8'),
    dropdown: yup.string().required('you must make a choice')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
    console.log(values);
  }
})(RawForm);

export default TheForm;
