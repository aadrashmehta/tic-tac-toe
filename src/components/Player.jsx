import { useState } from "react";

export default function Player({initalName, symbol, isActive, onChangeName}) {
	const [playerName, setPlayerName] = useState(initalName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		setIsEditing((editing) => !editing);
		
		isEditing ? onChangeName(symbol, playerName): null;
	};

	function handleNameChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	let btnCaption = isEditing ? "Save" : "Edit";	

	if(isEditing) {
		editablePlayerName = <input type="text" value={playerName} required onChange={handleNameChange} />;
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	)
}