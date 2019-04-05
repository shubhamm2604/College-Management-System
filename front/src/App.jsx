import React, { Component } from 'react';
import Routes from './routes';
import Header from './components/Header/Header';
class App extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
     title: 'College Management System',
     };
    }

  render() {

    return (
      <div className="App">
         <Header name={this.state.title} />
         <Routes name={this.state.title} />
      </div>
    );
  }
}
export default App;