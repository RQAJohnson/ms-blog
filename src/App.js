import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Symptoms from './Components/Symptoms/Symptoms';
import Home from './Components/Home/Home';
import About from './Components/About/About';
// import './App.css';

function App() {

  // const Home = () => <h1>Home</h1>

  return (
    <div className="App"
    style={{
      backgroundColor: 'white'
    }}>

     <Router>
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
     </Switch>
     </Router>
     
    </div>
    
  );
}

export default App;
