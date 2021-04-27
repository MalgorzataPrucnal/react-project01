// import { Link, useHistory } from 'react-router-dom';


export const Sign = ({email,password,error}) => {
return (
<form name="logInForm" className="login__form">
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
  </form>
)
        
} 