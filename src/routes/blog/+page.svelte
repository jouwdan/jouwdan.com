<script>
	import BlogCard from '$lib/ui/blogCard.svelte';
	export let data;
</script>

<h1 class="font-bold pt-4 pb-8">Blog</h1>
<div class="block lg:flex">
	{#each data.posts as post}
		<BlogCard post={post} />
	{/each}
</div>
