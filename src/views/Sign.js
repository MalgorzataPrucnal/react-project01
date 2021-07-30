// import { Link, useHistory } from 'react-router-dom';
import s from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
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
  box-shadow: 6px 6px 7px 0px rgba(0, 0, 0, 0.2);
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
const Button = s.button `
width: 52%;
height: 30px;

`

export const Sign = ({email,password,error}) => {
return (
<FormStyle name="logInForm" className="login__form">
<GlobalStyle/>

<h3>Log in</h3>
<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           error.email = 'Invalid emails address';
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
           <Label htmlFor="email">E-mail:</Label>
           <Field id="email" type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Label htmlFor="password">Password:</Label>
           <Field id="password" type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <Button type="submit" disabled={isSubmitting}>
             Log in
           </Button>
         </Form>
       )}
     </Formik>
     
</FormStyle>
)}
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