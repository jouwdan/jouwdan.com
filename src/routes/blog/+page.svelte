<script>
	import BlogCard from '$lib/ui/BlogCard.svelte';
	export let data;
</script>

<h1 class="font-bold pt-4 pb-8">Blog</h1>
<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
	{#each data.posts as post}
		<BlogCard post={post} />
	{/each}
</div>
