// import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import s from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import firebase from "firebase";
import { firebaseConfig } from '../firebase-config';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// firebase.initializeApp(firebaseConfig);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
    box-sizing: border-box;
  }
`

const FormStyle = s.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  margin: 50px auto;
  padding: 50px 70px 70px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: palevioletred;
`;

const Input = s.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 10px 0px 15px 0px;
`
const Label = s.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px 10px 0px;
`
const Button = s.button`
  margin: 10px 0px;
  width: 177px;
  height: 30px;
  background-color: #000184;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  color: lightgrey;
  border: solid 1px #000184;
`;

const H3 = s.h3`
  margin: 20px 0px 0px 0px;
`;

export const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(console.log("ok"))
        .catch((error) => alert(error));
    },
  });

  return (
    <Formik>
      <FormStyle onSubmit={formik.handleSubmit}>
        <GlobalStyle />
        <H3>Log in</H3>
        <Label htmlFor="email">E-mail:</Label>
        <Field
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email || ""}
        />
        <ErrorMessage name="email" component="div" />
        <Label htmlFor="password">Password:</Label>
        <Field
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password || ""}
        />
        <ErrorMessage name="password" component="div" />
        <Button type="submit">Log in</Button>

      <p>Don't have an account? <Link to="/SignUp.js">Sign Up</Link></p>
  
        {/* <a href="" onClick="">
        Click me
      </a> */}
    
    </FormStyle>
    </Formik>
    // </FormStyle>
  );
};
    // /* <h3>Log in</h3>
    // <label htmlFor="email">E-mail:</label>
    // <Input
    //   id="email"
    //   type="email"
    //   value={email}
    //   name="email"

    //   required/>
    // <Label htmlFor="password">Password:</Label>
    // <Input
    //   id="password"
    //   type="password"
    //   value={password}
    //   name="password"
    //   placeholder="Enter password"
    //   required/>
    // error && <p className="error">{error}</p>}
    // <Button type="submit">Log in</Button>
    // <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p> 