<script>
	import * as Card from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	export let data;
</script>

<svelte:head>
	<title>Jordan Harrison | Frontend Developer & GDG Portlaoise Organizer</title>
	<meta
		name="description"
		content="Jordan Harrison is a frontend developer, creative, and founder & organizer of GDG Portlaoise."
	/>
</svelte:head>

<div class="container min-h-[70vh] content-center 2xl:min-h-[50vh]">
	<div class="flex flex-col-reverse lg:flex-row">
		<div class="w-full content-center lg:max-w-[60%]">
			<h1 class="text-8xl font-semibold tracking-tighter">
				Hey, i'm <span class="text-[#f3d03e]">Jordan</span>
			</h1>
			<h2 class="py-4 text-4xl font-semibold tracking-tighter lg:py-6">
				Frontend developer. Creative. GDG organizer.
			</h2>
			<p class="text-lg font-normal tracking-tight">
				I have a passion for crafting enjoyable and engaging experiences for users. I founded &
				organize the local Google Developer Group chapter, and have spoke at various events.
			</p>
		</div>
		<div class="mx-auto my-8">
			<Avatar class="h-36 w-36 border-8 border-[#f3d03e] lg:h-72 lg:w-72">
				<AvatarImage src="https://github.com/jouwdan.png" />
				<AvatarFallback class="text-8xl">JH</AvatarFallback>
			</Avatar>
		</div>
	</div>
</div>
<div class="container my-8">
	<h2 class="text-4xl font-semibold tracking-tighter">Recent Posts</h2>
	<div class="my-2 grid grid-cols-1 lg:grid-cols-3">
		{#each data.posts as post}
			<a class="mx-auto my-4 overflow-hidden lg:mx-4" href={post.path}>
				<Card.Root class="h-full">
					<Card.Header class="p-0">
						<img src={post.meta.cover} class="h-48 w-full object-cover" alt="Post" />
					</Card.Header>
					<Card.Content class="pb-4">
						<Card.Title class="my-4 text-xl">{post.meta.title}</Card.Title>
						{post.meta.excerpt}
					</Card.Content>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
