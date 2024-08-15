import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { PanelBody, TabPanel, Dashicon } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const posts = useSelect((select) => {
		const query = {
			per_page: 5,
			_embed: true,
			_fields: [
				"id",
				"title",
				"excerpt",
				"date",
				"featured_media",
				"_embedded.author",
				"_embedded.wp:term",
				"_embedded['wp:featuredmedia']",
			],
		};

		return select("core").getEntityRecords("postType", "post", query);
	}, []);

	if (!posts) {
		return <div {...blockProps}>Loading...</div>;
	}

	if (posts.length === 0) {
		return <div {...blockProps}>No posts found.</div>;
	}

	return (
		<>
			<div className="pl-parent-container">
				<div className="pl-container">
					{posts.map((post) => (
						<div className="pl-card" key={post.id}>
							<div className="pl-card-header">
								{/* {post.featured_media && post._embedded["wp:featuredmedia"] && (
									<img
										src={post._embedded["wp:featuredmedia"][0].source_url}
										alt="Featured Image"
									/>
								)} */}
							</div>
							<div className="pl-card-body">
								<span className="pl-tag pl-tag-teal">demo category</span>
								<h4>{post.title.rendered}</h4>
								<p>An exploration into the truck's polarising design</p>
								<div className="pl-user">
									<img
										src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
										alt="user"
									/>
									<div className="pl-user-info">
										{/* <h5>{post._embedded.author[0].name}</h5> */}
										{/* <h5>{new Date(post.date).toLocaleDateString()}</h5> */}
										<small>2h ago</small>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
