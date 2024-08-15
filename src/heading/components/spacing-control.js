import React from "react";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const SpacingControl = ({ attributes, setAttributes }) => {
	const {
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const onChangeMarginTop = (newMarginTop) => {
		setAttributes({ marginTop: newMarginTop });
	};
	const onChangeMarginRight = (newMarginRight) => {
		setAttributes({ marginRight: newMarginRight });
	};
	const onChangeMarginBottom = (newMarginBottom) => {
		setAttributes({ marginBottom: newMarginBottom });
	};
	const onChangeMarginLeft = (newMarginLeft) => {
		setAttributes({ marginLeft: newMarginLeft });
	};

	const onChangePaddingTop = (newPaddingTop) => {
		setAttributes({ paddingTop: newPaddingTop });
	};
	const onChangePaddingRight = (newPaddingRight) => {
		setAttributes({ paddingRight: newPaddingRight });
	};
	const onChangePaddingBottom = (newPaddingBottom) => {
		setAttributes({ paddingBottom: newPaddingBottom });
	};
	const onChangePaddingLeft = (newPaddingLeft) => {
		setAttributes({ paddingLeft: newPaddingLeft });
	};

	return (
		<div className="spacing-control">
			<PanelBody title={__("Spacing", "bbdl")}>
				<div className="margin-control">
					<div className="margin-control__title">Margin</div>
					<div className="margin-control__content">
						<div className="mc-child margin-control__content__top">
							<TextControl
								value={marginTop}
								onChange={onChangeMarginTop}
								type="number"
							/>
							<span>Top</span>
						</div>
						<div className="mc-child margin-control__content__right">
							<TextControl
								value={marginRight}
								onChange={onChangeMarginRight}
								type="number"
							/>
							<span>Right</span>
						</div>
						<div className="mc-child margin-control__content__bottom">
							<TextControl
								value={marginBottom}
								onChange={onChangeMarginBottom}
								type="number"
							/>
							<span>Bottom</span>
						</div>
						<div className="mc-child margin-control__content__left">
							<TextControl
								value={marginLeft}
								onChange={onChangeMarginLeft}
								type="number"
							/>
							<span>Left</span>
						</div>
					</div>
				</div>

				<div className="padding-control">
					<div style={{ marginTop: "20px" }} className="padding-control__title">
						Padding
					</div>
					<div className="padding-control__content">
						<div className="pc-child padding-control__content__top">
							<TextControl
								value={paddingTop}
								onChange={onChangePaddingTop}
								type="number"
							/>
							<span>Top</span>
						</div>
						<div className="pc-child padding-control__content__right">
							<TextControl
								value={paddingRight}
								onChange={onChangePaddingRight}
								type="number"
							/>
							<span>Right</span>
						</div>
						<div className="pc-child padding-control__content__bottom">
							<TextControl
								value={paddingBottom}
								onChange={onChangePaddingBottom}
								type="number"
							/>
							<span>Bottom</span>
						</div>
						<div className="pc-child padding-control__content__left">
							<TextControl
								value={paddingLeft}
								onChange={onChangePaddingLeft}
								type="number"
							/>
							<span>Left</span>
						</div>
					</div>
				</div>
			</PanelBody>
		</div>
	);
};

export default SpacingControl;
