import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export class App extends Component {
	state = {
		name: "",
		abilities: [],
		pokemon: ""
	};


	async componentDidMount() {
		try {
			let result = await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemon);
			console.log(result.data);
			console.log(result.data.abilities);

			//1. Get the picture to show up
			//2. Get the abilities to show up
			//3. HOW CAN YOU MAKE THIS DYNAMIC - YOU WILL NEED AN INPUT and a BUTTON
			this.setState({
				name: result.data.name,
				image: result.data.sprites.front_default,
				abilities: result.data.abilities,
			});
		} catch (e) {
			console.log(e);
		}
	}

	handleFormSubmit = (e) => {

		e.preventDefault();
		this.componentDidMount()

	}

	onChangeHandler = (e) => {
		this.setState({
			pokemon: e.target.value
		})
		console.log(this.state.pokemon)
	}

	render() {
		return (
			<div className="App">
				<div className="form">
					<form onSubmit={this.handleFormSubmit}>
						<label>Pokemon name</label>
						<input type="text" onChange={this.onChangeHandler}/>
						<button>Submit</button>
					</form>
				</div>
				<div className="heroContent">
					<div className="card">
						<h1>{this.state.name}</h1>
						<img src={this.state.image} alt="Okie Doke" />
						<div>
							<ul>
								{this.state.abilities.map((item, key) => (
									<li key={key}>{item.ability.name}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
