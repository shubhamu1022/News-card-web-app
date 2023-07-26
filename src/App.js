import Home from "./pages/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
 
  return (
    <Router>
     <Navbar/>
    <Switch>
        <Route exact  path="/" >
           <Home />
        </Route>
        <Route exact  path="/about" >
           <About />
        </Route>
     </Switch>
     </Router>
  );
}

export default App;
