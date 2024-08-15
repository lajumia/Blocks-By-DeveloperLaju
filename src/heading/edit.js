/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import TagButton from "./components/btn-tag";
import AlignButton from "./components/btn-alignment";
import NumberInput from "./components/number-input";
import SpacingControl from "./components/spacing-control";

import {
	PanelBody,
	TabPanel,
	Dashicon,
	TextControl,
	SelectControl,
	TextareaControl,
	Button,
	ButtonGroup,
	ColorPicker,
	Popover,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		selectedTag,
		selectedAlign,
		textColor,
		backgroundColor,
		fontFamily,
		fontSize,
		fontWeight,
		lineHeight,
		letterSpacing,
		fontStyle,
		textTransform,
		textDecoration,
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;

	const [isPopoverVisible, setIsPopoverVisible] = useState(false);
	const [isBgPopoverVisible, setIsBgPopoverVisible] = useState(false);

	const buttonType = ["H1", "H2", "H3", "H4", "H5", "H6", "p", "span", "div"];
	const buttonAlign = ["Left", "Center", "Right"];

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};
	const onClickButton = (index) => {
		setAttributes({ selectedTag: index });
	};

	const onClickAlignChange = (index) => {
		setAttributes({ selectedAlign: index });
	};

	const onChangeColor = (newColor) => {
		setAttributes({ textColor: newColor });
	};
	const onChangeBgColor = (newColor) => {
		setAttributes({ backgroundColor: newColor });
	};

	const onChangeTextFontFamily = (newFontFamily) => {
		setAttributes({ fontFamily: newFontFamily });
	};

	const onChangeFontSize = (event) => {
		const newSize = event.target.value;
		setAttributes({ fontSize: parseInt(newSize) });
	};

	const onChangeFontWeight = (newWeight) => {
		setAttributes({
			fontWeight: newWeight,
		});
	};

	const onChangeLineHeight = (event) => {
		const newHeight = event.target.value;
		setAttributes({
			lineHeight: parseInt(newHeight),
		});
	};

	const onChangeLetterSpacing = (event) => {
		const newSpacing = event.target.value;
		setAttributes({
			letterSpacing: parseInt(newSpacing),
		});
	};

	const onChangeFontStyle = (newStyle) => {
		setAttributes({
			fontStyle: newStyle,
		});
	};

	const onChangeTextTransform = (newTransform) => {
		setAttributes({
			textTransform: newTransform,
		});
	};

	const onChangeTextDecoration = (newDecoration) => {
		setAttributes({
			textDecoration: newDecoration,
		});
	};

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="heading-tab-panel"
					activeClass="h-active-tab"
					tabs={[
						{
							name: "layout",
							title: (
								<span>
									<Dashicon icon="layout" />{" "}
									{__("Layout", "tabbed-inspector-block")}
								</span>
							),
							className: "layout-tab tab-item",
						},
						{
							name: "style",
							title: (
								<span>
									<Dashicon icon="color-picker" />{" "}
									{__("Style", "tabbed-inspector-block")}
								</span>
							),
							className: "style-tab tab-item",
						},
						{
							name: "advanced",
							title: (
								<span>
									<Dashicon icon="admin-generic" />{" "}
									{__("Advanced", "tabbed-inspector-block")}
								</span>
							),
							className: "advanced-tab tab-item",
						},
					]}
				>
					{(tab) => {
						switch (tab.name) {
							case "layout":
								return (
									<PanelBody title={__("Content", "bbdl")}>
										<TextareaControl
											label={__("Title", "developerlaju")}
											value={content}
											onChange={onChangeContent}
										/>
										<div style={{ margin: "4px 0px" }}>Titla Tag</div>
										<ButtonGroup className="bbdl_btn_group">
											{buttonType.map((type, index) => (
												<TagButton
													isPrimary={selectedTag === index}
													onClick={() => onClickButton(index)}
												>
													{type}
												</TagButton>
											))}
										</ButtonGroup>

										<div style={{ margin: "20px 0px 5px 0px" }}>Alignment</div>
										<ButtonGroup className="bbdl-btn-align">
											{buttonAlign.map((align, index) => (
												<AlignButton
													isPrimary={selectedAlign === index}
													onClick={() => onClickAlignChange(index)}
												>
													{align}
												</AlignButton>
											))}
										</ButtonGroup>
										<div style={{ margin: "20px 0px 5px 0px" }}></div>
									</PanelBody>
								);
							case "style":
								return (
									<PanelBody title={__("Title", "bbdl")}>
										<div className="text-color-picker">
											<div className="tc-label">Text Color</div>
											<div className="tc-content">
												<Button
													style={{
														backgroundColor: textColor,
														width: "25px",
														height: "25px",
														borderRadius: "10%",
													}}
													className="text-color-btn"
													onClick={() => setIsPopoverVisible(true)}
												/>
											</div>

											{isPopoverVisible && (
												<Popover
													position="top left"
													onClose={() => setIsPopoverVisible(false)}
												>
													<ColorPicker
														color={textColor}
														onChange={onChangeColor}
														enableAlpha
													/>
												</Popover>
											)}
										</div>

										<div className="bg-color-picker">
											<div className="bg-label">Background Color</div>
											<div className="bg-content">
												<Button
													style={{
														backgroundColor: backgroundColor,
														width: "25px",
														height: "25px",
														borderRadius: "10%",
													}}
													className="bg-color-btn"
													onClick={() => setIsBgPopoverVisible(true)}
												/>
											</div>

											{isBgPopoverVisible && (
												<Popover
													position="top right"
													onClose={() => setIsBgPopoverVisible(false)}
												>
													<ColorPicker
														color={backgroundColor}
														onChange={onChangeBgColor}
														enableAlpha
													/>
												</Popover>
											)}
										</div>

										<div className="font-family">
											<div>Font Family</div>
											<div className="font-family-picker">
												<SelectControl
													value={fontFamily}
													style={{ width: "90px" }}
													options={[
														{ label: "Arial", value: "Arial, sans-serif" },
														{ label: "Georgia", value: "Georgia, serif" },
														{
															label: "Times New Roman",
															value: '"Times New Roman", Times, serif',
														},
														{
															label: "Courier New",
															value: '"Courier New", Courier, monospace',
														},
														{ label: "Verdana", value: "Verdana, sans-serif" },
														{ label: "Tahoma", value: "Tahoma, sans-serif" },
														{
															label: "Trebuchet MS",
															value: '"Trebuchet MS", sans-serif',
														},
														{
															label: "Lucida Sans",
															value: '"Lucida Sans", sans-serif',
														},
													]}
													onChange={onChangeTextFontFamily}
												/>
											</div>
										</div>

										<div className="font-size">
											<div>Font Size</div>
											<div className="f-size-picker">
												<NumberInput
													value={fontSize}
													onChange={onChangeFontSize}
												/>
											</div>
										</div>

										<div className="font-weight">
											<div>Font weight</div>
											<div className="f-weight-picker">
												<SelectControl
													value={fontWeight}
													options={[
														{
															label: __("100", "font-weight-control"),
															value: "100",
														},
														{
															label: __("200", "font-weight-control"),
															value: "200",
														},
														{
															label: __("300", "font-weight-control"),
															value: "300",
														},
														{
															label: __("400", "font-weight-control"),
															value: "400",
														},
														{
															label: __("500", "font-weight-control"),
															value: "500",
														},
														{
															label: __("600", "font-weight-control"),
															value: "600",
														},
														{
															label: __("Bold", "font-weight-control"),
															value: "700",
														},
														{
															label: __("Extra Bold", "font-weight-control"),
															value: "800",
														},
													]}
													onChange={onChangeFontWeight}
												/>
											</div>
										</div>

										<div className="line-height">
											<div>Line Heignt</div>
											<div className="line-height-picker">
												<NumberInput
													value={lineHeight}
													onChange={onChangeLineHeight}
												/>
											</div>
										</div>

										<div className="latter-spacing">
											<div>Latter Spacing</div>
											<div className="latter-spacing-picker">
												<NumberInput
													value={letterSpacing}
													onChange={onChangeLetterSpacing}
												/>
											</div>
										</div>

										<div className="font-style">
											<div>Font Style</div>
											<div className="f-style-picker">
												<SelectControl
													value={fontStyle}
													style={{ width: "90px" }}
													options={[
														{
															label: __("Normal", "font-weight-control"),
															value: "normal",
														},
														{
															label: __("Italic", "font-weight-control"),
															value: "italic",
														},
													]}
													onChange={onChangeFontStyle}
												/>
											</div>
										</div>

										<div className="text-transform">
											<div>Text Transform</div>
											<div className="text-transform-picker">
												<SelectControl
													value={textTransform}
													style={{ width: "90px" }}
													options={[
														{
															label: __("None", "font-weight-control"),
															value: "none",
														},
														{
															label: __("Capitalize", "font-weight-control"),
															value: "capitalize",
														},
														{
															label: __("Uppercase", "font-weight-control"),
															value: "uppercase",
														},
														{
															label: __("Lowercase", "font-weight-control"),
															value: "lowercase",
														},
													]}
													onChange={onChangeTextTransform}
												/>
											</div>
										</div>

										<div className="text-decoration">
											<div>Text Decoration</div>
											<div className="text-decoration-picker">
												<SelectControl
													value={textDecoration}
													style={{ width: "90px" }}
													options={[
														{
															label: __("None", "font-weight-control"),
															value: "none",
														},
														{
															label: __("Underline", "font-weight-control"),
															value: "underline",
														},
														{
															label: __("Line Through", "font-weight-control"),
															value: "line-through",
														},
														{
															label: __("Overline", "font-weight-control"),
															value: "overline",
														},
													]}
													onChange={onChangeTextDecoration}
												/>
											</div>
										</div>
									</PanelBody>
								);
							case "advanced":
								return (
									<div className="advanceTab">
										<SpacingControl
											attributes={attributes}
											setAttributes={setAttributes}
										/>
									</div>
								);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<div {...useBlockProps()}>
				<RichText
					tagName={buttonType[selectedTag]}
					style={{
						textAlign: buttonAlign[selectedAlign],
						color: textColor,
						backgroundColor: backgroundColor,
						fontFamily: fontFamily,
						fontSize: `${fontSize}px`,
						fontWeight: fontWeight,
						lineHeight: lineHeight,
						letterSpacing: `${letterSpacing}px`,
						fontStyle: fontStyle,
						textTransform: textTransform,
						textDecoration: textDecoration,
						margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
						padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
					}}
					className="wp-block-headingg"
					value={content}
					onChange={onChangeContent}
				/>
			</div>
		</>
	);
}
