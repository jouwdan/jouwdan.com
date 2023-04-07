<script>
	export let data;
</script>
<h1 class="font-bold pt-4 pb-8">Blog</h1>
<div class="flex">
{#each data.posts as post}
<a class="card bg-initial card-hover overflow-hidden w-96" href="{post.path}"
	><header>
		<img
			src={post.meta.cover}
			class="bg-black/50 w-full aspect-[16/9]"
			alt="Post"
		/>
	</header>
	<div class="p-4 space-y-4">
		<h4 data-toc-ignore="" class="font-bold">{post.meta.title}</h4>
		<article>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
				eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure
				molestias cum expedita architecto itaque quae rem.
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
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
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold">By Jordan Harrison</h6>
			<small>On {post.meta.date}</small>
		</div>
	</footer></a
>
{/each}
</div>