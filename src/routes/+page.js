export const load = async ({ fetch }) => {
	const posts = await (await fetch('/api/posts/3')).json();
	return { posts };
};
