<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<h1 class="font-bold pt-4 pb-8">Portfolio</h1>
<div class="p-16 rounded-xl border border-surface-700 bg-surface-800 my-2">
	<div class="block lg:flex items-center">
		<img src="/images/tutors.png" alt="Tutors" class="w-full lg:w-1/4" />
		<div class="flex-1">
			<div class="block lg:pl-12">
				<h2 class="font-bold">Tutors Open Source Project</h2>
				<h3>Maintainer</h3>
				<div class="py-2">
					<span class="chip variant-soft-secondary">
						<span><Icon icon="mdi:language-typescript" /></span>
						<span>TypeScript</span>
					</span>
					<span class="chip variant-soft-error">
						<span><Icon icon="logos:svelte-icon" /></span>
						<span>SvelteKit</span>
					</span>
					<span class="chip variant-soft-tertiary">
						<span><Icon icon="mdi:tailwind" /></span>
						<span>TailwindCSS</span>
					</span>
					<span class="chip variant-soft-warning">
						<span><Icon icon="mdi:firebase" /></span>
						<span>Firebase</span>
					</span>
				</div>
				<p>
					Tutors is a collection of open source components & services supporting the creation of
					transformative learning experiences using open web standards.
				</p>
				<div class="mt-4">
					<a
						class="btn variant-ghost-primary"
						href="https://tutors.dev"
						target="_blank"
						rel="noreferrer">Visit Tutors</a
					>
					<a
						class="btn variant-ghost-surface"
						href="https://github.com/tutors-sdk/tutors"
						target="_blank"
						rel="noreferrer">View GitHub Repo</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="p-16 rounded-xl border border-surface-700 bg-surface-800 my-2">
	<div class="block lg:flex items-center">
		<img
			src="https://github.com/jouwdan/Todo/raw/main/images/todo-screenshots.png"
			alt="Todo"
			class="w-full lg:w-1/4"
		/>
		<div class="flex-1">
			<div class="block lg:pl-12">
				<h2 class="font-bold">Todo</h2>
				<div class="py-2">
					<span class="chip variant-soft-success">
						<span><Icon icon="mdi:language-kotlin" /></span>
						<span>Kotlin</span>
					</span>
					<span class="chip variant-soft-warning">
						<span><Icon icon="mdi:firebase" /></span>
						<span>Firebase</span>
					</span>
					<span class="chip variant-soft-tertiary">
						<span><Icon icon="mdi:material-design" /></span>
						<span>Material Design</span>
					</span>
				</div>
				<p>
					Todo is a basic task manager/todo list built for Android using MVVM / Clean Architecture,
					Fragments, Dagger & Hilt.
				</p>
				<div class="mt-4">
					<a
						class="btn variant-ghost-surface"
						href="https://github.com/jouwdan/Todo"
						target="_blank"
						rel="noreferrer">View GitHub Repo</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="p-16 rounded-xl border border-surface-700 bg-surface-800 my-2">
	<div class="block lg:flex items-center">
		<img src="/images/filmtrack.png" alt="Filmtrack" class="w-full lg:w-1/4" />
		<div class="flex-1">
			<div class="block lg:pl-12">
				<h2 class="font-bold">Filmtrack</h2>
				<div class="py-2">
					<span class="chip variant-soft-secondary">
						<span><Icon icon="mdi:react" /></span>
						<span>React</span>
					</span>
					<span class="chip variant-soft-tertiary">
						<span><Icon icon="mdi:tailwind" /></span>
						<span>TailwindCSS</span>
					</span>
					<span class="chip variant-soft-success">
						<span><Icon icon="simple-icons:axios" /></span>
						<span>Axios</span>
					</span>
					<span class="chip variant-soft-warning">
						<span><Icon icon="mdi:firebase" /></span>
						<span>Firebase</span>
					</span>
				</div>
				<p>
					Filmtrack is a React & Firebase app that uses the TMDB API to track movies and keep a log
					of favourites & a watch list.
				</p>
				<div class="mt-4">
					<a
						class="btn variant-ghost-secondary"
						href="https://film-track.netlify.app"
						target="_blank"
						rel="noreferrer">View Deployment</a
					>
					<a
						class="btn variant-ghost-surface"
						href="https://github.com/jouwdan/filmtrack"
						target="_blank"
						rel="noreferrer">View GitHub Repo</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="p-16 rounded-xl border border-surface-700 bg-surface-800 my-2">
	<div class="block lg:flex items-center">
		<img src="https://crem.netlify.app//course.png" alt="CREM" class="w-full lg:w-1/4" />
		<div class="flex-1">
			<div class="block lg:pl-12">
				<h2 class="font-bold">CREM</h2>
				<div class="py-2">
					<span class="chip variant-soft-primary">
						<span><Icon icon="mdi:language-python" /></span>
						<span>Python</span>
					</span>
					<span class="chip variant-soft-tertiary">
						<span><Icon icon="simple-icons:mqtt" /></span>
						<span>MQTT</span>
					</span>
					<span class="chip variant-soft-secondary">
						<span><Icon icon="simple-icons:express" /></span>
						<span>Express</span>
					</span>
					<span class="chip variant-soft-warning">
						<span><Icon icon="simple-icons:handlebarsdotjs" /></span>
						<span>Handlebars</span>
					</span>
					<span class="chip variant-soft-tertiary">
						<span><Icon icon="simple-icons:mariadb" /></span>
						<span>MariaDB</span>
					</span>
				</div>
				<p>
					CREM, Comms Room Environment Monitor, is an experiment hosted on a Raspberry Pi which is
					used to monitor, log and alert temperature & humidity changes in one or multiple comms
					rooms by connecting wirelessly to DHT22 temperature sensors attached to ESP32 NodeMCU
					boards.
				</p>
				<div class="mt-4">
					<a
						class="btn variant-ghost-surface"
						href="https://github.com/jouwdan/CREM"
						target="_blank"
						rel="noreferrer">View GitHub Repo</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
