import React, { Component } from "react";
import Pokemon from "./components/pokemon/Pokemon";
import "./App.css"
export class App extends Component {


	render() {
		return (
			<div className="App">
				<Pokemon />
			</div>
		);
	}
}

export default App;
