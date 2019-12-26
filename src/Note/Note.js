import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment} from './actions';

class Note extends Component {
	render() {
		console.log(this.props.number)
		return (
			<div>
			<h1>counter : {this.props.number}</h1>
                <button onClick={() => this.props.increment(2)}>+</button>
                <button onClick={() => this.props.decrement(2)}>-</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        increment: (num) => dispatch(increment(num)),
        decrement: (num) => dispatch(decrement(num)),
	};
};

const mapStateToProps = (state) => {
	return {
		number: state.mainReducer.number,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);