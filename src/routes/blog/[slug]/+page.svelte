<script>
	export let data;
</script>

<article class="prose prose-invert mx-auto">
	<div class="card text-center bg-cover" style="background-image: url({data.cover});">
		<div class="w-full h-full px-12 bg-surface-900 bg-opacity-80">
			<h1 class="pt-20 pb-4 font-bold">{data.title}</h1>
			<p class="pb-20">Published: {data.date}</p>
		</div>
	</div>
	<svelte:component this={data.content} />
</article>
