import React, { Component } from 'react';
import './App.css';
import List from './List';
import TodoApp from './TodoApp';
import TodoBox from './TodoBox';
import Timer from './Timer';
import Monster from './Monster';
import Clicker from './Clicker';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    console.log('onChange ' + event.target.value);
    this.setState({ term: event.target.value });
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
        {/*}
        <h1>This is my list</h1>
        <List items={this.state.items} />
        <h1>This is TodoApp from the main site</h1>
        <TodoApp />
        <h1>This is TodoBox from Codepen</h1>
        <TodoBox />
        <h1>This is my timer</h1>
        <Timer />
        */}
        <Clicker />
      </div>
    );
  }
}

export default App;















