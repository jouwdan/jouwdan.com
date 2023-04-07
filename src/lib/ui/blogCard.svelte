<script lang="ts">
  export let post: any
</script>

<a
	class="card bg-initial card-hover overflow-hidden h-[30rem] mx-auto lg:mx-4 my-4 flex flex-col justify-between"
	href={post.path}
	><header>
		<img src={post.meta.cover} class="h-36 lg:h-48 w-full object-cover" alt="Post" />
	</header>
	<div class="px-4 space-y-4">
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
				data-testid="avatar"
			>
				<img
					class="avatar-image w-full h-full object-cover"
					src="/images/avatar-thumb.png"
					alt=""
					style=""
				/>
			</figure>
			<div class="flex-auto flex justify-between items-center align">
				<h6 class="font-bold">By Jordan Harrison</h6>
				<small>On {post.meta.date}</small>
			</div>
		</div>
	</footer>
</a>
