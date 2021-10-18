import React, { Component } from "react";
import Message from "./components/Message";
import "./App.css";

export class App extends Component {
	render() {
		return (
			// <div style={{ textAlign: "center" }}
			<div style={styles2.divFontSizeInPercent}>
				<div style={styles.appDiv}>
					<h1>Brandon Johnson</h1>
					<Message name="Brandon" message="how is your day going?" num={1} />
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
        fontSize: 50
    },
    divFontSizeInPercent: {
        fontSize: "200%"
    }
};

export default App;
