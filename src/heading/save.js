/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const {
		content,
		selectedButton,
		selectedAlign,
		Link,
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
		// margin
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		// padding
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
	} = attributes;
	const buttonType = ["H1", "H2", "H3", "H4", "H5", "H6", "p", "span", "div"];

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
				tagName={buttonType[selectedButton]}
				value={content}
				style={{
					fontSize: `${fontSize}px`,
					fontWeight: fontWeight,
					color: textColor,
					backgroundColor: backgroundColor,
					fontFamily: fontFamily,
					lineHeight: lineHeight,
					letterSpacing: `${letterSpacing}px`,
					fontStyle: fontStyle,
					textTransform: textTransform,
					textDecoration: textDecoration,
					margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
					padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
				}}
			/>
		</div>
	);
}
