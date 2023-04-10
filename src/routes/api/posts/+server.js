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

export const GET = async () => {
	const allPosts = await fetchPosts();

	const sortedPosts = allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	return json(sortedPosts);
};
