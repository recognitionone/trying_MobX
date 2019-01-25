import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
// import DevTools from "mobx-react-devtools";

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timer = 0;
  }
}

const TimerView = observer(({ appState }) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

class TodoMob extends React.Component {
  render() {
    return (
      <div>
        <TimerView appState={new AppState()} />
      </div>
      )
  }
}

export default TodoMob;






















// @observer
// export default class TodoMob extends React.Component {
//   createNew(e) {
//     if (e.which === 13) {
//       this.props.store.createTodo(e.target.value)
//       e.target.value = ""
//     }
//   }

//   filter(e) {
//     this.props.store.filter = e.target.value
//   }

//   toggleComplete(todo) {
//     todo.complete = !todo.complete
//   }

//   render() {
//     const { clearComplete, filter, filteredTodos, todos } = this.props.store

//     const todoLis = filteredTodos.map(todo => (
//       <li key={todo.id}>
//        <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
//        <span>{todo.value}</span>
//       </li>
//     ))
//     return <div>
//       <h1>todos</h1>
//       <input className="new" onKeyPress={this.createNew.bind(this)} />
//       <input className="filter" value={filter} onChange={this.filter.bind(this)} />
//       <ul>{todoLis}</ul>
//       <a href="#" onClick={clearComplete}>Clear Complete</a>
//     </div>
//   }
// }