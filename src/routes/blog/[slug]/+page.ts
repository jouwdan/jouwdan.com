export const prerender = true;

export async function load({ params }) {
	const { metadata, default: content } = await import(`../../../lib/blog/${params.slug}.md`);
	const { title, date, cover } = metadata;

	return { content, title, date, cover };
}
