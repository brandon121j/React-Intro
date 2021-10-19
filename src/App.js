import React, { Component } from "react";
import "./App.css";


export class App extends Component {
	state = {
		postArray: [
			{
				id: 1,
				body: "lol"
			},
			{
				id: 2,
				body: "hehe"
			},
			{
				id: 3,
				body: "haha"
			}
		],
		post: "",
	};

	handleShowPostArray = () => (
		<ul>
			{ this.state.postArray.map(({body, id}) => (
				<li key={id}>{body}</li>
			))}
		</ul>
	);

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handlePostSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.post)
	};
	
	render() {

		const { post } = this.state;
		return (
			<div style={{ textAlign: "center" }}>
				{this.handleShowPostArray()}
				<form onSubmit={this.handlePostSubmit}>
					<input name="post" value={post} onChange={this.handleInputChange} />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}


export default App;
