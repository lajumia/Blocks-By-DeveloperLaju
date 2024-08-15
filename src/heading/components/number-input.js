import React from "react";

const NumnerInput = ({ value, onChange }) => {
	const buttonStyle = {
		width: "90px",
	};

	return (
		<div>
			<input
				style={buttonStyle}
				type="number"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
export default NumnerInput;
