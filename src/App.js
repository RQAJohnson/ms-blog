import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Symptoms from './Components/Symptoms/Symptoms'
import './App.css';

function App() {
  return (
    <div className="App"
    style={{
      backgroundColor: 'white'
    }}>
     {/* <p>Hello world!</p> */}

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
     </Switch>
     {/* <Footer/> */}
     </Router>
     
    </div>
    
  );
}


export default App;
