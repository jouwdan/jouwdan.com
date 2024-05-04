<script>
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	const education = [
		{
			avatar: '/images/setu.png',
			alt: 'South East Technological University',
			title: 'Higher Diploma in Computer Science',
			institution: 'South East Technological University, Waterford',
			info: '2021 - 2023, First Class Honors.'
		},
		{
			avatar: '/images/ait.jpg',
			alt: 'avatar of AIT',
			title: 'Bachelor of Science in Network Management',
			institution: 'Athlone Institute of Technology',
			info: '2014 - 2017, Merit Grade 2.'
		}
	];

	const experience = [
		{
			avatar: '/images/crl.png',
			alt: 'Charles River Labs',
			title: 'Software Developer',
			company: 'Charles River Labs',
			date: 'Nov 2023 - Present',
			info: "Building a decoupled frontend, with a progressive rollout, for the company's Drupal-powered client facing website.",
			tech: 'NodeJS, NextJS, React, Chakra UI, JSON API, Drupal'
		},
		{
			avatar: '/images/crl.png',
			alt: 'Charles River Labs',
			title: 'Software Developer I',
			company: 'Charles River Labs',
			date: 'Jan 2023 - Nov 2023',
			info: 'Working in a full stack capacity, building an MVP of an internal user management application. Migrated the app from Webpack to Vite (and Jest to Vitest) in early stages to improve DevEx. Ensured all code was written to a high standard, and it had a solid test coverage.',
			tech: 'NodeJS, React, Fastify, Vitest, Playwright, Azure, CosmosDB, Gremlin QL'
		},
		{
			avatar: '/images/crl.png',
			alt: 'Charles River Labs',
			title: 'Associate Software Developer',
			company: 'Charles River Labs',
			date: 'Jul 2022 - Dec 2022',
			info: 'Worked on the frontend of Apollo, a large client-facing application, from MVP stage - implementing new functionality and working with large datasets',
			tech: 'NodeJS, React, Fastify, Jest, Cypress, Azure'
		},
		{
			avatar: '/images/glanbia-cheese-eu.jpeg',
			alt: 'Glanbia Cheese EU',
			title: 'IT Support Officer',
			company: 'Glanbia Cheese EU',
			date: 'Nov 2019 - Jul 2022',
			info: 'Overseen and implemented IT infrastructure & systems during the green field build and commissioning phase of a €135 million food processing facility. Ensured all the IT infrastructure was delivered on-time and under budget. Sole IT System Administrator on site supporting all internal IT systems, including servers, networks, printers & end user hardware.'
		},
		{
			avatar: '/images/rps.jpeg',
			alt: 'RPS',
			title: 'Junior IT Administrator',
			company: 'RPS Group',
			date: 'Dec 2017 - Nov 2019',
			info: 'First & second line support role to 2 offices of circa 150 users in a heavily CAD focused environment. Rolled out Windows 10 3 months earlier than projected.'
		}
	];
</script>

<div class="container">
	<h1 class="py-8 text-3xl font-bold">About Me</h1>
	<div class="mx-auto max-w-[65ch]">
		<div class="flex items-center md:flex">
			<Avatar class="h-24 w-24 border-2 border-[#f3d03e]">
				<AvatarImage class="h-20 w-20" src="https://github.com/jouwdan.png" />
				<AvatarFallback class="text-8xl">JH</AvatarFallback>
			</Avatar>
			<div class="ml-8 flex-1">
				<p class="text-4xl font-bold">Jordan Harrison</p>
				<p class="text-xl">Software Developer @ Charles River Labs</p>
				<p class="text-md">
					Creative Full Stack Developer. GDG Portlaoise Founder & Organizer. Web Tech & Open Source
					Enthusiast.
				</p>
			</div>
		</div>
		<div class="my-8 flex">
			<div class="flex-1">
				<h2 class="text-3xl font-bold">Biography</h2>
				<p class="py-4 text-justify">
					Hey, I'm Jordan. I'm the founder of Google Developer Groups Portlaoise, an all-around tech
					enthusiast & maintainer of the
					<a href="https://tutors.dev" target="_blank"> Tutors Open Source Project.</a>.<br />
					I spoke at NodeConf EU 2023, GDG Glasgow 2022, and was the SETU Red Hat Best Project 2023 award
					winner.<br />
					I'm an avid reader, and am a huge fan of the Potterverse.
				</p>
			</div>
		</div>
		<div class="my-8">
			<h2 class="text-3xl font-bold">Education</h2>
			{#each education as { avatar, alt, title, institution, info }}
				<div class="my-8 flex">
					<Avatar class="h-12 w-12">
						<AvatarImage src={avatar} />
						<AvatarFallback>{alt}</AvatarFallback>
					</Avatar>
					<div class="flex-1 pl-4">
						<h3 class="text-xl font-bold">{title}</h3>
						<p class="text-lg">{institution}</p>
						<p class="text-md">{info}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="my-8">
			<h2 class="text-3xl font-bold">Experience</h2>
			{#each experience as { avatar, alt, title, company, date, info, tech }}
				<div class="my-8 flex">
					<Avatar class="h-12 w-12">
						<AvatarImage src={avatar} />
						<AvatarFallback>{alt}</AvatarFallback>
					</Avatar>
					<div class="flex-1 pl-4">
						<h3 class="text-xl font-bold">{title}</h3>
						<p class="text-lg">{company}</p>
						<p class="text-sm">{date}</p>
						<p class="text-md">{info}</p>
						{#if tech}
							<p class="text-md"><b>Tech Stack:</b> {tech}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
