import React, { Component } from 'react';
import './App.css';
import First from './components/First';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        people: []
    }
  }

  render(){
    return (
      <div>  
        <First 
          firstName="John"
          lastName="Doe"
          age={6}
          hairColor="Brown"
        />
        <First 
          firstName="Jane"
          lastName="Doe"
          age={66}
          hairColor="Blue"
        />
        <First 
          firstName="Jeff"
          lastName="Darn"
          age={14}
          hairColor="Purple"
        />
        <First 
          firstName="Jessica"
          lastName="Darn"
          age={18}
          hairColor="Blonde"
        />
      </div>
    );
  }
}

export default App;
