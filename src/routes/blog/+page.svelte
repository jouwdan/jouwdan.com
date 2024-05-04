<script>
	import * as Card from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	export let data;
</script>

<svelte:head>
	<title>Jordan Harrison | Blog</title>
</svelte:head>

<div class="container">
	<h1 class="py-8 text-3xl font-bold">Blog</h1>
	<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#each data.posts as post}
			<a class="mx-auto my-4 overflow-hidden lg:mx-4" href={post.path}>
				<Card.Root class="h-full">
					<Card.Header class="p-0">
						<img src={post.meta.cover} class="h-48 w-full object-cover" alt="Post" />
					</Card.Header>
					<Card.Content class="py-0">
						<Card.Title class="my-4 text-xl">{post.meta.title}</Card.Title>
						{post.meta.excerpt}
					</Card.Content>
					<Card.Footer class="bottom-0 p-0">
						<div class="flex items-center justify-end space-x-4 p-4">
							<Avatar class="h-10 w-10">
								<AvatarImage src="/images/avatar-thumb.png" />
								<AvatarFallback>JH</AvatarFallback>
							</Avatar>
							<div>
								<p class="font-bold">By Jordan Harrison</p>
								<p>On {post.meta.date}</p>
							</div>
						</div>
					</Card.Footer>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
