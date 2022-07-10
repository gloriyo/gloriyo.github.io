import React, { Fragment, useState } from 'react';
import TBoard from './tic-tac-toe/Board';
import BBoard from './bricks/Board';
import TopNav from './TopNav';

interface props {
	game: string;

}

const Game = ({ game } : props ) => {

	
	const [gameName, setGameName] = useState(game);
	return (
		<Fragment>
			<TopNav />
			<div className="game-cnt">
				{gameName == "tic-tac-toe" && <TBoard />}
				{gameName == "bricks" && <BBoard />}
			</div>
		</Fragment>

		
	
	)
};

export default Game;
