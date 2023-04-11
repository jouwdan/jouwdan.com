<script>
	export let data;
</script>

<div
	class="px-12 rounded-xl py-6 lg:py-12 mx-auto justify-center items-center bg-gradient-to-br from-primary-500 to-secondary-500 text-surface-900">
	<div class="flex flex-col-reverse lg:flex-row">
		<div class="my-auto lg:w-1/2 lg:pl-24">
			<h1 class="font-bold mb-4">Hey, I'm Jordan!</h1>
			<h3>
				I'm a creative full stack developer based in Ireland. I love tinkering with web tech and am
				a big fan of open source. Also, I'm a bit of a tech nerd (but hey, who isn't these days?).
			</h3>
			<a class="btn variant-ghost-primary mt-4" href="/about">About Me</a>
			<a class="btn variant-ghost-secondary mt-4" href="/contact">Get in Touch</a>
		</div>
		<img src="images/waving-avatar.png" alt="avatar of Jordan waving" class="mx-auto pb-12" />
	</div>
</div>

<div class="mt-4 py-6 lg:py-12 mx-auto px-8 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-100 dark:bg-surface-800">
	<h2 class="font-bold">Latest Posts</h2>
	<div class="grid grid-cols-1 lg:grid-cols-3 my-2">
		{#each data.posts as post}
			<a class="card bg-initial card-hover overflow-hidden mx-auto lg:mx-4 my-4" href={post.path}>
				<header>
					<img src={post.meta.cover} class="h-48 w-full object-cover" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h4 data-toc-ignore="" class="font-bold">{post.meta.title}</h4>
					<article>
						<p>
							{post.meta.excerpt}
						</p>
					</article>
				</div>
				<footer>
					<hr class="opacity-50" />
					<div class="p-4 flex justify-end items-center space-x-4">
						<figure
							class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
							data-testid="avatar">
							<img
								class="avatar-image w-full h-full object-cover"
								src="/images/avatar-thumb.png"
								alt=""
								style="" />
						</figure>
						<div class="flex-auto flex justify-between items-center align">
							<h6 class="font-bold">By Jordan Harrison</h6>
							<small>On {post.meta.date}</small>
						</div>
					</div>
				</footer>
			</a>
		{/each}
	</div>
	<div class="text-right">
		<a class="btn variant-ghost-primary mt-4" href="/blog">View All Posts</a>
	</div>
</div>
