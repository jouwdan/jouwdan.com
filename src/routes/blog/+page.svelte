<script>
	import BlogCard from '$lib/ui/BlogCard.svelte';
	export let data;
</script>

<h1 class="font-bold pt-4 pb-8">Blog</h1>
<div class="block lg:grid lg:grid-cols-3">
	{#each data.posts as post}
		<BlogCard post={post} />
	{/each}
</div>
