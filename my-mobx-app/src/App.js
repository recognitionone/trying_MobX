import React, { Component } from 'react';
import './App.css';
// import List from './List';
// import TodoApp from './TodoApp';
// import TodoBox from './TodoBox';
// import Timer from './Timer';
// import Monster from './Monster';
import Clicker from './Clicker';


class App extends Component {

  render() {
    return (
      <div>
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















