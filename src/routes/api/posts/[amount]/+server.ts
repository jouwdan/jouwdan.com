import { json } from '@sveltejs/kit';

const fetchPosts = async () => {
	const allPostFiles = import.meta.glob('$lib/blog/*.md');

	const allPosts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(9, -3);

			return { meta: metadata, path: postPath };
		})
	);

	return allPosts;
};

export async function GET({ params }) {
	const allPosts = await fetchPosts();
	const sortedPosts = allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
	const amount = params.amount;
	if (params.amount === 'all') {
		return json(sortedPosts);
	}
	const posts = amount ? sortedPosts.slice(0, amount) : sortedPosts;
	return json(posts);
}
