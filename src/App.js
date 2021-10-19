import React, { Component } from "react";
import Message from "./components/Message";
import "./App.css";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			toggleMe: false,
			email: "",
		};
	}

	add = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	subtract = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	toggleMe = () => {
		// this.setState({
		// 	toggleMe: !this.state.toggleMe
		// });
		this.setState((prevState) => {
			return {
				toggleMe: !prevState.toggleMe,
			};
		});
	};

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		});
	};

	render() {
		return (
			// <div style={{ textAlign: "center" }}
			<div style={styles2.divFontSizeInPercent}>
				<div style={styles.appDiv}>
					<h1>Brandon Johnson</h1>
					<Message name="Brandon" message="how is your day going?" num={1} />
					<hr />
					<div>
						Count: { this.state.count }
						<div>
							<button onClick={this.add}>+</button>
							<button onClick={this.subtract}>-</button>
						</div>
					</div>
					<div>
						<div
							style={{
								height: 50,
								backgroundColor: this.state.toggleMe ? "blue" : "red",
							}}
						>
							<button onClick={this.toggleMe}>Toggle me</button>
						</div>
					</div>
				</div>
				<div>
					<input name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
				</div>
			</div>
		);
	}
}

const styles = {
	appDiv: {
		textAlign: "center",
	},
};

const styles2 = {
	divFontSize: {
		fontSize: 50,
	},
	divFontSizeInPercent: {
		fontSize: "200%",
	},
};

export default App;
