import React, { Component } from 'react';

class GameContainer extends Component {
	render() {
		return (
			<iframe title="game" style={{width:"100%", height:"100%", overflow: "hidden"}} frameBorder="0" src={this.props.url}></iframe>
		);
	}
}

export default GameContainer;