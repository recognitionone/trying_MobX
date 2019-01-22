import React, { Component } from 'react';
import './App.css';
import List from './List';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('Hello this.state.term ' + this.state.term);
    console.log('Hello this.state.items ' + this.state.items);
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input 
            placeholder="Task"
            value={this.state.term} 
            onChange={this.onChange} />
          <button>Submit</button>
        </form>
      
        <List items={this.state.items} />
      
      </div>
    );
  }
}

export default App;















