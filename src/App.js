import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Contact from './Components/Contact/Contact';
import Symptoms from './Components/Symptoms/Symptoms';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Shift from './Components/External/Shift';
import MSTrust from './Components/External/MSTrust';


function App() {

  return (
    <div className="App"
    style={{
      backgroundColor: 'white'
    }}>

     <Router>
       <Navigation/>
     <Switch>
     <Route path="/" exact>
      <Home/>
     </Route>
     <Route path="/about">
      <About/>
     </Route>
     <Route path="/contact">
      <Contact/>
     </Route>
     <Route path="/symptoms">
      <Symptoms/>
    </Route>
     <Route path="/home">
      <Home/>
     </Route>
     <Route path="/shift">
      <Shift/>
     </Route>
     <Route path="/mstrust">
      <MSTrust/>
     </Route>
     </Switch>
     </Router>
     
    </div>
    
  );
}

export default App;
