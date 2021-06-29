// import { Link, useHistory } from 'react-router-dom';
import s from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
  }
`

const Form = s.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  margin: 50px auto;
  padding: 50px 70px 70px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: palevioletred;
`;

const Input = s.input`
// display: flex;
// flex-direction: column;
// align-items: center;
width: 50%;
margin: 10px 0px 15px 0px;
`
const Label = s.label`
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 15px 0px 10px 0px;
`
const Button = s.button `
width: 52%;
height: 30px;

`

export const Sign = ({email,password,error}) => {
return (

<Form name="logInForm" className="login__form">
<GlobalStyle />
    <h3>Log in</h3>
    <label htmlFor="email">E-mail:</label>
    <Input
      id="email"
      type="email"
      value={email}
      name="email"

      required/>
    <Label htmlFor="password">Password:</Label>
    <Input
      id="password"
      type="password"
      value={password}
      name="password"
      placeholder="Enter password"
      required/>
    {error && <p className="error">{error}</p>}
    <Button type="submit">Log in</Button>
    {/* <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p> */}
    
  </Form>
  
)
        
} 