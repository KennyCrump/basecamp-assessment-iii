import React, { Component } from 'react';
import logo from './logo.png';
import riddle from './hat-riddle.png';
import './App.css';

class App extends Component {
  state = {
    toggle: false
  }

  toggle = () => {
    this.setState({
      toggle : !this.state.toggle
    })
  }
  render() {
    return (
      
      <div className="App">
        
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Daily Riddles</h1>
          </header>
          <div>
          <p className="App-intro">
            Here is your <b>Daily Riddle.</b> No Cheating!
          </p>
          <img src={riddle} className="riddle" alt='riddle' />
          <button className="answer-button" onClick={this.toggle}><span>{this.state.toggle ? "Hide Answer" : "Show Answer"}</span></button>
          {this.state.toggle &&
          <Answer />}
          </div>
          <footer><Footer /></footer>
      </div>
      
     
    );
  }
}

class Answer extends Component {
  render() {
    return (
      <p className="answer">
      Cheryl's hat is <text style={{color:'black'}}><b>BLACK</b></text>. 
      She knows this because the two people behind her can't determine what hat they have. Once Albert says he doesn't know what color his hat is, Bernard knows that the two hats in front of Albert can't both be white. If Cheryl's hat was white, Bernard would know his hat was black. However, since Bernard doesn't know what color his hat is, Cheryl then knows without a doubt that her hat must be black.   </p>
    );
  }
}
class Footer extends Component {
  render(){
    return(
      <p className="footer">Copyright of Loki Riddles Inc</p>
    );
  }
}
export default App;
