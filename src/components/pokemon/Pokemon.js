import React, { Component } from "react";
import axios from "axios";
import PokemonDetail from "./PokemonDetail";
import Loading from "../../common/Loading";

export class Pokemon extends Component {
	state = {
		name: "",
		picture: "",
		abilitiesArray: [],
		search: "",
		initialSearch: "pikachu",
		isError: false,
		errorMessage: "",
		isLoading: false,
	};

	async componentDidMount() {
		this.fetchPokemonApi(this.state.initialSearch);
	}

	fetchPokemonApi = async (search) => {
		this.setState({
			isLoading: true,
		});

		try {
			let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
			this.setState({
				name: result.data.name,
				picture: result.data.sprites.front_default,
				abilitiesArray: result.data.abilities,
				isError: false,
				errorMessage: "",
				isLoading: false,
			});
		} catch (e) {
			console.log(e.response);
			if (e && e.response.status === 404) {
				this.setState({
					isError: true,
					errorMessage: e.response.data,
					isLoading: false,
				});
			}
		}
	};

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleOnClick = async () => {
		this.fetchPokemonApi(this.state.search);
	};
	
	render() {
		// console.log(this.props)
		return (
			// react fragment or <></> empty tag works
			<React.Fragment>
				<div>
					<input
						name="search"
						value={this.state.search}
						onChange={this.handleOnChange}
					/>
					<button onClick={this.handleOnClick}>Search</button>
					{/* <div>
                    {this.state.isError ? <span>{this.state.errorMessage}</span> : ""}
                </div> */}
					<div>
						{this.state.isError && (
							<span style={{ color: "red" }}>{this.state.errorMessage}</span>
						)}
					</div>
				</div>
				<hr />
				{this.state.isLoading ? (
					<Loading />
				) : (
					<PokemonDetail
						name={this.state.name}
						picture={this.state.picture}
						abilitiesArray={this.state.abilitiesArray}
					/>
				)}
			</React.Fragment>
		);
	}
}

export default Pokemon;
