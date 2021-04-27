// import { Link, useHistory } from 'react-router-dom';
import s from 'styled-components';

const Form = s.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  margin: 50px auto;
  padding: 50px;
  background-color: palevioletred;
`;


export const Sign = ({email,password,error}) => {
return (

<Form name="logInForm" className="login__form">
      
    <h3>Log in</h3>
    <label htmlFor="email">E-mail:</label>
    <input
      id="email"
      type="email"
      value={email}
      name="email"

      required/>
    <label htmlFor="password">Password:</label>
    <input
      id="password"
      type="password"
      value={password}
      name="password"
      placeholder="Enter password"
      required/>
    {error && <p className="error">{error}</p>}
    <button type="submit">Log in</button>
    {/* <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p> */}
  
  </Form>
  
)
        
} 