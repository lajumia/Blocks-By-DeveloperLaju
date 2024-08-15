// CustomButton.js
import React from "react";

const AlignButton = ({ isPrimary, onClick, children }) => {
	const buttonStyle = {
		padding: "2px 10px",
		margin: "1px 1px",
		backgroundColor: isPrimary ? "#fe0000" : "#f0f0f0",
		color: isPrimary ? "#fff" : "#000",
		border: isPrimary ? "#fe0000" : "#f0f0f0",
		cursor: "pointer",
		borderRadius: "2px",
	};

	return (
		<button style={buttonStyle} className="align-btn" onClick={onClick}>
			{children}
		</button>
	);
};

export default AlignButton;
