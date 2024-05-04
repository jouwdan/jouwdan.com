<script>
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

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
				As a frontend developer, I have a passion for crafting enjoyable and engaging experiences
				for users. I founded & organize the local Google Developer Group chapter, and have spoke at
				various events.
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
