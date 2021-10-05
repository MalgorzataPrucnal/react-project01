
import './App.css';
import {LogIn} from './views/LogIn'
import {SignUp} from './views/SignUp'
import { HashRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    <Route>
    {/* <div className="App">
      <SignIn />
    </div> */}
    <Switch>
    <Route exact path="/" component={LogIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/LogIn" component={LogIn} />
    </Switch>
    </Route>
    </Router>
  );
}

 
export default App;
