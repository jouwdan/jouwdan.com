<script>
  export let data;
</script>

<article class="prose prose-invert mx-auto">
  <h1 class="pt-4">{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>