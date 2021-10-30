import React from "react";
import propTypes from "prop-types"

function PokemonDetail({ name, picture, abilitiesArray }) {
	return (
		<div>
			<div>
				<div>name: {name}</div>
				<div>
					picture: <img src={picture} alt="pokemon" />
				</div>
				<div>
					<ul>
						{/* map the ability object array 2 levels down to get to the name of the ability and the index */}
						{abilitiesArray.map(({ ability: { name } }, index) => {
							return (
								// return the index + 1 and the name of the ability
								<li key={name}>
									Ability {index + 1}: {name}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

PokemonDetail.propTypes = {
	name: propTypes.string.isRequired,
	picture: propTypes.string.isRequired,
	abilitiesArray: propTypes.string.isRequired

}

export default PokemonDetail;

