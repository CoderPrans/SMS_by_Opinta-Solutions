import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: null,
      message: "",
      country: 91
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(e){
    e.preventDefault();
    if(e.target.id === "number"){
      this.setState({ number: e.target.value})}
    else if(e.target.id === "message"){
      this.setState({ message: e.target.value})}
    else if(e.target.id === "country"){
      this.setState({ country: e.target.value})}
  }
 
  handleSubmit(){
    //    console.log("Submit was pressed");
    //    console.log(this.state);
    let { number, message, country } = this.state; 
    let url = `https://api.msg91.com/api/sendhttp.php?country=${country}&sender=OPINTA&route=4&mobiles=${number}&authkey=254145AmFnhfpgfGK5c27a269&message=${message}`
    fetch(url, {
      mode: 'no-cors' 
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(`ERROR OCCURED ${err}`))
  }
  render() {
    return (
      <div className="App">
        <h1>SMS by OPINTA SOLUTIONS</h1>
        <br />
        <input type="text" placeholder="Country Code" value={this.state.country} id="country" onChange={this.handleInput}></input>
        <br /><br />
        <input type="text" placeholder="Mobile Number" value={this.state.number} id="number" onChange={this.handleInput}></input>
        <br /><br />
        <input type="text" placeholder="Message" value={this.state.message} id="message" onChange={this.handleInput}></input>
        <br /><br />
        <button onClick={this.handleSubmit}>Submit</button>
     </div>
    );
  }
}

export default App;
