<script>
	import '../app.pcss';
	import '@fontsource-variable/bricolage-grotesque';
	import { ModeWatcher, toggleMode } from 'mode-watcher';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Github, Linkedin, Twitter } from 'lucide-svelte';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	export let data;
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center">
		<a class="mr-4 items-center space-x-4" href="/">
			<Avatar class="h-10 w-10">
				<AvatarImage src="/logo.png" />
				<AvatarFallback>JH</AvatarFallback>
			</Avatar>
		</a>
		<div class="flex-1 space-x-1 lg:space-x-4">
			<Button variant="link" href="/">Home</Button>
			<Button variant="link" href="/about">About</Button>
			<Button variant="link" href="/blog">Blog</Button>
		</div>
		<div class="right">
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
</header>

<ModeWatcher />

{#key data.pathname}
	<div
		in:fly={{ easing: cubicOut, y: 10, duration: 150, delay: 200 }}
		out:fly={{ easing: cubicIn, y: 10, duration: 150 }}
	>
		<slot />
	</div>
{/key}

<footer>
	<div class="container py-8 text-center">
		<p class="text-sm text-gray-500">
			&copy; {new Date().getFullYear()} Jordan Harrison. All rights reserved.
		</p>
		<div class="mt-4 flex justify-center space-x-4">
			<a href="https://linkedin.com/in/jouwdan" target="_blank" rel="noopener noreferrer">
				<Linkedin />
			</a>
			<a href="https://github.com/jouwdan " target="_blank" rel="noopener noreferrer">
				<Github />
			</a>
			<a href="https://twitter.com/jouwdan" target="_blank" rel="noopener noreferrer">
				<Twitter />
			</a>
		</div>
	</div>
</footer>
