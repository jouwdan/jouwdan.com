<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/theme.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';

	afterNavigate((params: any) => {
		const isNewPage: boolean =
			params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	const menu: DrawerSettings = {
		id: 'menu',
		position: 'right',
		bgDrawer: 'bg-surface-800 text-white',
		bgBackdrop: 'backdrop-blur',
		width: 'w-full',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};

	$: currentRoute = $page.url.pathname;
	export let data;
</script>

<svelte:head>
	<title>Jordan Harrison | Full Stack Developer</title>
</svelte:head>

<Drawer>
	{#if $drawerStore.id === 'menu'}
		<nav class="list-nav py-6 px-4">
			<div class="flex pb-6 items-center">
				<h2 class="font-bold pl-4 flex-1">Menu</h2>
				<button class="btn btn-icon-lg variant-ghost-surface" on:click={() => drawerStore.close()}>
					x
				</button>
			</div>
			<ul>
				<li>
					<a
						class="btn btn-xl my-2 transition-all duration-200"
						href="/"
						class:variant-ghost-surface={currentRoute !== '/'}
						class:variant-ghost-primary={currentRoute === '/'}
						on:click={() => drawerStore.close()}>
						Home
					</a>
				</li>
				<li>
					<a
						class="btn btn-xl my-2 transition-all duration-200"
						href="/about"
						class:variant-ghost-surface={!currentRoute.includes('/about')}
						class:variant-ghost-primary={currentRoute.includes('/about')}
						on:click={() => drawerStore.close()}>
						About
					</a>
				</li>
				<li>
					<a
						class="btn btn-xl my-2 transition-all duration-200"
						href="/portfolio"
						class:variant-ghost-surface={!currentRoute.includes('/portfolio')}
						class:variant-ghost-primary={currentRoute.includes('/portfolio')}
						on:click={() => drawerStore.close()}>
						Portfolio
					</a>
				</li>
				<li>
					<a
						class="btn btn-xl my-2 transition-all duration-200"
						href="/blog"
						class:variant-ghost-surface={!currentRoute.includes('/blog')}
						class:variant-ghost-primary={currentRoute.includes('/blog')}
						on:click={() => drawerStore.close()}>
						Blog
					</a>
				</li>
				<li>
					<a
						class="btn btn-xl my-2 transition-all duration-200"
						href="/contact"
						class:variant-ghost-surface={!currentRoute.includes('/contact')}
						class:variant-ghost-primary={currentRoute.includes('/contact')}
						on:click={() => drawerStore.close()}>
						Contact
					</a>
				</li>
				<li>
					<hr class="divider my-4 w-24 mx-auto" />
				</li>
			</ul>
			<ul class="flex space-x-4 items-center justify-center content-center">
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://twitter.com/jouwdan"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="mdi:twitter" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn variant-soft-surface hover:variant-soft-primary"
						href="https://linkedin.com/in/jouwdan"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="mdi:linkedin" class="text-3xl" />
					</a>
				</li>
				<li>
					<a
						class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
						href="https://github.com/jouwdan"
						target="_blank"
						rel="noreferrer"
						on:click={() => drawerStore.close()}>
						<Icon icon="mdi:github" class="text-3xl" />
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</Drawer>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<div class="bg-surface-900 backdrop-blur-xl bg-opacity-80">
			<AppBar background="none" class="py-4 container mx-auto">
				<svelte:fragment slot="lead">
					<a href="/">
						<Avatar src="/images/logo.png" rounded="rounded-xl" />
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<div class="hidden lg:flex space-x-3 items-center">
						<a
							class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
							href="/"
							class:variant-ghost-surface={currentRoute !== '/'}
							class:variant-ghost-primary={currentRoute === '/'}>
							Home
						</a>
						<a
							class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
							href="/about"
							class:variant-ghost-surface={!currentRoute.includes('/about')}
							class:variant-ghost-primary={currentRoute.includes('/about')}>
							About
						</a>
						<a
							class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
							href="/portfolio"
							class:variant-ghost-surface={!currentRoute.includes('/portfolio')}
							class:variant-ghost-primary={currentRoute.includes('/portfolio')}>
							Portfolio
						</a>
						<a
							class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
							href="/blog"
							class:variant-ghost-surface={!currentRoute.includes('/blog')}
							class:variant-ghost-primary={currentRoute.includes('/blog')}>
							Blog
						</a>
						<a
							class="btn btn-sm hover:variant-ghost-primary transition-all duration-200"
							href="/contact"
							class:variant-ghost-surface={!currentRoute.includes('/contact')}
							class:variant-ghost-primary={currentRoute.includes('/contact')}>
							Contact
						</a>
						<hr class="divider-vertical h-6" />
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://twitter.com/jouwdan"
							target="_blank"
							rel="noreferrer">
							<Icon icon="mdi:twitter" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://linkedin.com/in/jouwdan"
							target="_blank"
							rel="noreferrer">
							<Icon icon="mdi:linkedin" class="text-xl" />
						</a>
						<a
							class="btn btn-sm variant-soft-surface hover:variant-soft-primary"
							href="https://github.com/jouwdan"
							target="_blank"
							rel="noreferrer">
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
		</div>
	</svelte:fragment>
	{#key data.pathname}
		<div
			class="container mx-auto px-4"
			in:fly={{ easing: cubicOut, y: 10, duration: 150, delay: 200 }}
			out:fly={{ easing: cubicIn, y: 10, duration: 150 }}>
			<slot />
		</div>
	{/key}
	<svelte:fragment slot="pageFooter">
		<div class="container mx-auto">
			<div
				class="mx-4 p-4 bg-surface-800 rounded-xl my-4 flex justify-center items-center border border-surface-700">
				<p>Built with ♥ and SvelteKit, Deployed by GitHub Pages</p>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
