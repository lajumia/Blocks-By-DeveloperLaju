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

import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

export default function Edit() {
	const blockProps = useBlockProps();

	const posts = useSelect((select) => {
		return select("core").getEntityRecords("postType", "post");
	}, []);

	return (
		<div {...blockProps}>
			{!posts && "Loading"}
			{posts && posts.length === 0 && "No Posts"}
			{posts && posts.length > 0 && (
				<a href={posts[0].link}>{posts[0].title.rendered}</a>
			)}
			{console.log(posts)}
		</div>
	);
}
