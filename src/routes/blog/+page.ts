export const load = async ({ fetch }) => {
	const posts = await (await fetch('/api/posts')).json();
	return { posts };
};
