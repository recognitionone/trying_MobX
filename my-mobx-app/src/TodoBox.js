import React from 'react';


class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name} and your {this.props.nick}
      </div>
      )
  }
}



class TodoBox extends React.Component {
  render() {
    return (
      <div>
        <HelloMessage name="SomeName" nick="Stuff and things" /> 
      </div>
      )
  }
}

export default TodoBox;