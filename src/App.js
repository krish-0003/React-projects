import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Component/About';
import Home from './Component/Home';
import Mainpage from './Component/Mainpage'
function App() {
  return (
   <>
   <Router>
   <Navbar name="krish"/>
   
   <Switch>
   {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
        </Switch>



</Router>
</>
  );
}

export default App;
