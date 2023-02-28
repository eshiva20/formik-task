import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Reactform.css";

const Reactform = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsandcondition: false,
    age: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 chars")
      .max(10, "max 10 chars")
      .required("Required !"),
    email: Yup.string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "invalid email"
      )
      .required("Required !"),
    password: Yup.string().min(6).max(10).required("Required !"),
    gender: Yup.string().required("required !"),
    termsandcondition: Yup.boolean().oneOf(
      [true],
      "Please accept the terms and condition"
    ),
    age: Yup.string().required("required !"),
  });

  return (
    <>
      <div className="main">
        <h1>Form using Formik and Yup</h1>
        <Formik
          initialValues={defaultValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="form-div">
            <div className="input-div">
              <Field
                className="input"
                name="name"
                type="text"
                placeholder="Enter your Name"
              />
              <span>
                <ErrorMessage name="name" />
              </span>
            </div>

            <div className="input-div">
              <Field
                className="input"
                name="email"
                type="text"
                placeholder="Enter your Email id"
              />
              <span>
                <ErrorMessage name="email" />
              </span>
            </div>

            <div className="input-div">
              <Field
                className="input"
                name="password"
                type="text"
                placeholder="Enter your Password"
              />
              <span>
                <ErrorMessage name="password" />
              </span>
            </div>

            <div className="input-div">
              <Field
                className="input select"
                component="select"
                name="gender"
                placeholder="Enter your Gender"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
              </Field>
              <span>
                <ErrorMessage name="gender" />
              </span>
            </div>

            <div>
              <div className="radio-container">
                <div>
                  <Field
                    className="radio"
                    type="radio"
                    name="age"
                    value="greaterThan20"
                  />
                  <label className="">Age greater than 20</label>
                </div>
                <div>
                  <Field
                    className="radio"
                    type="radio"
                    name="age"
                    value="lessThan20"
                  />
                  <label className=""> Age Less than 20</label>
                </div>
              </div>

              <span>
                <ErrorMessage name="age" />
              </span>
            </div>

            <div className="input-div condition">
              <label className="terms">
                <Field type="checkbox" name="termsandcondition"></Field>
                <span className="terms-msg">I Accept Terms and Conditions</span>
              </label>
              <span>
                <ErrorMessage name="termsandcondition" />
              </span>
            </div>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Reactform;
