<script>
	export let data;
</script>

<svelte:head>
	<title>Jordan Harrison | {data.title}</title>
</svelte:head>

<div class="bg-cover bg-center text-center" style="background-image: url({data.cover});">
	<div class="h-full w-full bg-slate-900 bg-opacity-80 px-12">
		<h1 class="pb-4 pt-20 text-2xl font-bold text-white">{data.title}</h1>
		<p class="pb-20 text-white">Published: {data.date}</p>
	</div>
</div>
<article class="prose mx-auto my-8 dark:prose-invert">
	<svelte:component this={data.content} />
</article>
