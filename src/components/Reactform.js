import React from "react";
import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Reactform.css";
import axios from "axios";
import UserTable from "./UserTable";

const Reactform = () => {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    getData();
  }, []);

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsandcondition: false,
    age: "",
    social: {
      facebook: "",
      instagram: "",
    },
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("valuesssssssssss", values);
    setData({
      name: values.name,
      email: values.email,
      password: values.password,
      gender: values.gender,
      termsandcondition: values.termsandcondition,
      age: values.age,
      facebook: values.social.facebook,
      instagram: values.social.instagram ?? "N/A",
    });
    resetForm({ values: "" });
    getData()
  };

  console.log("datat from state", data);

  const validationSchema = Yup.object().shape({
    // name: Yup.string()
    //   .min(3, "Min 3 chars")
    //   .max(10, "max 10 chars")
    //   .required("Required !"),
    // email: Yup.string()
    //   .matches(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //     "invalid email"
    //   )
    //   .required("Required !"),
    // password: Yup.string()
    //   .required("Required !")
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
    //     "Set a Strong Password"
    //   ),
    // gender: Yup.string().required("required !"),
    // termsandcondition: Yup.boolean().oneOf(
    //   [true],
    //   "Please accept the terms and condition"
    // ),
    // age: Yup.string().required("required !"),
    // social: Yup.object().shape({
    //   facebook: Yup.string().required("Facebook username is required"),
    //   // instagram: Yup.string().required('LinkedIn username is required')
    // }),
  });

  const getData = () => {
    axios
      .get("http://localhost:8080/user")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log("error", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/user/${id}`)
      .then(() => getData())
      .catch((err) => console.log("delete err", err));
  };

  const addUser = async (values) => {
    await axios
      .post("http://localhost:8080/user", data)
      .then(() => {
        // getData()
        alert("user Added");
      })
      .catch((err) => console.log("post err", err));
  };

  if (Object.values(data) != 0) {
    addUser();
  }

  return (
    <>
      <div className="main">
        <h1>Form using Formik and Yup</h1>{" "}
        <Formik
          initialValues={defaultValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="form-div">
            <div className="row">
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
            </div>

            <div className="row">
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
            </div>

            <div className="row">
              <div className="input-div">
                <Field
                  className="input"
                  name="social.facebook"
                  type="text"
                  placeholder="Facebook id"
                />
                <span>
                  <ErrorMessage name="social.facebook" />
                </span>
              </div>
              <div className="input-div">
                <Field
                  className="input"
                  name="social.instagram"
                  type="text"
                  placeholder="instagram id"
                />
                <span>
                  <ErrorMessage name="social.instagram" />
                </span>
              </div>
            </div>

            <div className="radio-main-div">
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
                <Field className="radio-terms" type="checkbox" name="termsandcondition"></Field>
                <span className="terms-msg">I Accept Terms and Conditions</span>
              </label>
              <span >
                <ErrorMessage name="termsandcondition" />
              </span>
            </div>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      <UserTable userData={userData} handleDelete={handleDelete} />
    </>
  );
};

export default Reactform;
