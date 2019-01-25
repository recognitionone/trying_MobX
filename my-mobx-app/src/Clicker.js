import React from 'react';


class Clicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.handleInc = this.handleInc.bind(this);
		this.handleDec = this.handleDec.bind(this);
	}

	handleInc() {
		this.setState(state => ({count: state.count + 1}))
	}

	handleDec() {
		this.setState(state => ({count: state.count - 1}))
	}

	render() {
		return(
			<div>
				<div>Count: {this.state.count}</div>
				<div><button onClick={this.handleInc}> More </button></div>
				<div><button onClick={this.handleDec}> Less </button></div>
			</div>
			)
		}
	}

export default Clicker;