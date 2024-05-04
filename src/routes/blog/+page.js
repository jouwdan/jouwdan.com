export const load = async ({ fetch }) => {
	const posts = await (await fetch('/api/posts/all')).json();
	return { posts };
};
