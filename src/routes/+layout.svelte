<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/theme.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	const menu: DrawerSettings = {
	id: 'menu',
	position: 'right',
	bgDrawer: 'bg-surface-800 text-white',
	bgBackdrop: 'backdrop-blur',
	width: 'w-2/3',
	padding: 'p-4',
	rounded: 'rounded-xl',
};

	$: currentRoute = $page.url.pathname;
</script>

<svelte:head>
	<title>Jordan Harrison | Full Stack Developer</title>
</svelte:head>

<Drawer>
	{#if $drawerStore.id === 'menu'}
<nav class="list-nav py-6 px-4">
	<!-- (optionally you can provde a label here) -->
	<ul>
		<li>
		<a
						class="btn hover:variant-ghost-primary transition-all duration-200"
						href="/"
						class:variant-ghost-surface={currentRoute !== '/'}
						class:variant-ghost-primary={currentRoute === '/'}
					>
						Home
					</a></li>
					<li>
					<a
						class="btn hover:variant-ghost-primary transition-all duration-200"
						href="/about"
						class:variant-ghost-surface={!currentRoute.includes('/about')}
						class:variant-ghost-primary={currentRoute.includes('/about')}
					>
						About
					</a></li>
					<li>
					<a
						class="btn hover:variant-ghost-primary transition-all duration-200"
						href="/portfolio"
						class:variant-ghost-surface={!currentRoute.includes('/portfolio')}
						class:variant-ghost-primary={currentRoute.includes('/portfolio')}
					>
						Portfolio
					</a></li>
					<li>
					<a
						class="btn hover:variant-ghost-primary transition-all duration-200"
						href="/blog"
						class:variant-ghost-surface={!currentRoute.includes('/blog')}
						class:variant-ghost-primary={currentRoute.includes('/blog')}
					>
						Blog
					</a></li>
					<li>
					<hr class="divider my-4 w-24 mx-auto" /></li>
					<li>
					<a
						class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
						href="https://twitter.com/jouwdan"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="mdi:twitter" class="text-xl" />
					</a></li>
					<li>
					<a
						class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
						href="https://linkedin.com/in/jouwdan"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="mdi:linkedin" class="text-xl" />
					</a></li>
					<li>
					<a
						class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
						href="https://github.com/jouwdan"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="mdi:github" class="text-xl" />
					</a></li>
		<!-- ... -->
	</ul>
</nav>
{/if}
</Drawer>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<AppBar
			background="bg-surface-900 backdrop-blur-xl bg-opacity-80"
			class="container mx-auto py-4"
		>
			<svelte:fragment slot="lead">
				<a href="/">
					<Avatar src="images/logo.png" rounded="rounded-xl" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden lg:flex space-x-3 items-center">
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
						href="/about"
						class:variant-ghost-surface={!currentRoute.includes('/about')}
						class:variant-ghost-primary={currentRoute.includes('/about')}
					>
						About
					</a>
					<a
						class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
						href="/portfolio"
						class:variant-ghost-surface={!currentRoute.includes('/portfolio')}
						class:variant-ghost-primary={currentRoute.includes('/portfolio')}
					>
						Portfolio
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
						href="https://linkedin.com/in/jouwdan"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="mdi:linkedin" class="text-xl" />
					</a>
					<a
						class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
						href="https://github.com/jouwdan"
						target="_blank"
						rel="noreferrer"
					>
						<Icon icon="mdi:github" class="text-xl" />
					</a>
				</div>
				<div class="flex lg:hidden">
					<button class="btn px-0" on:click={() => drawerStore.open(menu)}>
						<Icon icon="mdi:menu" class="text-2xl" />
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<div
			class="container mx-auto py-4 px-4 bg-surface-800 rounded-xl my-4 flex justify-center items-center"
		>
			<p>Built with ♥ and SvelteKit, Deployed by GitHub Pages</p>
		</div>
	</svelte:fragment>
</AppShell>
