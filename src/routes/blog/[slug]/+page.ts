export async function load({ params }){
  const post = await import(`../../../lib/blog/${params.slug}.md`)
  const { title, date, cover } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		cover
	};
}