import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ParkList from './components/ParkList';
import ParkDetail from './components/ParkLocation/ParkDetail';



function App () {
  
  
    return (
    <Router>
      <div className="App">
        
        <Route  path='/' exact component={ParkList}/>
        <Route path="/:id"  component={ParkDetail} />     
      </div>
    </Router>
  );
}


export default App;
