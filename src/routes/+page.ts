export const load = async ({ fetch }) => {
	const posts = await (await fetch('/api/posts/latest')).json();
	return { posts };
};
