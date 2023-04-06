<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/theme.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	$: currentRoute = $page.url.pathname;
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg-surface-900 backdrop-blur-xl bg-opacity-80" class="container mx-auto py-4">
			<svelte:fragment slot="lead">
				<a href="/">
					<Avatar src="images/logo.png" rounded="rounded-xl" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
					href="/"
					class:variant-ghost-surface={currentRoute !== '/'}
					class:variant-ghost-primary={currentRoute === '/'}
				>
					Home
				</a>
				<a
					class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
					href="/blog"
					class:variant-ghost-surface={!currentRoute.includes('/blog')}
					class:variant-ghost-primary={currentRoute.includes('/blog')}
				>
					Blog
				</a>
				<hr class="divider-vertical h-6" />
				<a
					class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
					href="https://twitter.com/jouwdan"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="mdi:twitter" class="text-xl" />
				</a>
				<a
					class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="mdi:github" class="text-xl" />
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
			<div class="container mx-auto h-16 bg-surface-800 rounded-xl my-4 flex justify-center items-center">
				<p>Built with ♥ and SvelteKit, Deployed by GitHub Pages</p>
			</div>
	</svelte:fragment>
</AppShell>
