import './App.css';
import React from 'react';
import Person from './Component/Person';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }


handleShow =()=> this.setState({show : !this.state.show})
  render(){
    return(
      <div>
        <h1>Workshop State</h1>
        <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show  &&  <Person/>
        }
       
      </div>
    )
  }
}

export default App;