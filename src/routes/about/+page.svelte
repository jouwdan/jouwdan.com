<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<h1 class="font-bold pt-4 pb-8">About Me</h1>

<div
	class="p-16 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-100 dark:bg-surface-800">
	<div class="max-w-[65ch] mx-auto">
		<div class="block md:flex items-center">
			<Avatar width="w-32" src="images/me.jpg" alt="avatar of Jordan" class="mr-12" />
			<div class="flex-1">
				<h2 class="font-bold">Jordan Harrison</h2>
				<h4>Software Developer I, CXE @ Charles River Labs</h4>
				<h6 class="dark:text-surface-300 text-surface-700">
					Creative Full Stack Developer. Web Tech & Open Source Enthusiast.
				</h6>
			</div>
		</div>
		<div class="flex my-4">
			<div class="flex-1">
				<h2 class="font-bold pt-8">Biography</h2>
				<p class="pt-4 text-justify text-surface-700 dark:text-surface-300">
					Hey, I'm Jordan. I'm an all-around tech enthusiast, maintainer of the
					<a href="https://tutors.dev" target="_blank"> Tutors Open Source Project </a>, on which I
					spoke at GDG Glasgow 2022, and won the Red Hat Best Project 2023 award for. I'm an avid
					reader, and am a huge fan of the Potterverse.
				</p>
			</div>
		</div>
		<div class="my-4">
			<div>
				<h2 class="font-bold pt-8">Education</h2>
			</div>
			<div class="flex pt-4">
				<Avatar width="w-12" src="/images/setu.png" alt="avatar of SETU" class="mr-8 h-12" />
				<div class="flex-1">
					<h4>Higher Diploma in Computer Science</h4>
					<h5>South East Technological University, Waterford</h5>
					<h6 class="dark:text-surface-300 text-surface-700">2021 - 2023</h6>
					<p class="text-justify dark:text-surface-300 text-surface-700 mt-2">
						First Class Honors.
					</p>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex pt-4">
				<Avatar width="w-12" src="/images/ait.jpg" alt="avatar of AIT" class="mr-8 h-12" />
				<div class="flex-1">
					<h4>Bachelor of Science in Network Management</h4>
					<h5>Athlone Institute of Technology</h5>
					<h6 class="dark:text-surface-300 text-surface-700">2014 - 2017</h6>
					<p class="text-justify dark:text-surface-300 text-surface-700 mt-2">Merit Grade 2.</p>
				</div>
			</div>
		</div>
		<div class="my-4">
			<div>
				<h2 class="font-bold pt-8">Experience</h2>
			</div>
			<div class="flex pt-4">
				<Avatar
					width="w-12"
					src="/images/crl.png"
					alt="avatar of Charles River Labs"
					class="mr-8 h-12" />
				<div class="flex-1">
					<h4>Software Developer I, CXE</h4>
					<h5>Charles River Labs</h5>
					<h6 class="dark:text-surface-300 text-surface-700">Jan 2023 - Present</h6>
					<p class="text-justify dark:text-surface-300 text-surface-700 mt-2">
						Working in a full stack capacity, building an MVP of an internal user management
						application.<br />
						Migrated the app from Webpack to Vite (and Jest to Vitest) in early stages to improve DevEx.<br />
						Ensured all code was written to a high standard, and it had a solid test coverage.<br />
						Tech stack: NodeJS, React, Fastify, Vitest, Playwright, Azure, CosmosDB, Gremlin QL.
					</p>
					<hr class="my-4" />
					<h4>Associate Software Developer, CXE</h4>
					<h5>Charles River Labs</h5>
					<h6 class="dark:text-surface-300 text-surface-700">Jul 2022 - Dec 2022</h6>
					<p class="text-justify dark:text-surface-300 text-surface-700 mt-2">
						Worked on the frontend of Apollo, a large client-facing application, from MVP stage -
						implementing new functionality and working with large datasets. <br />
						Tech Stack: NodeJS, React, Fastify, Jest, Cypress, Azure.
					</p>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex">
				<Avatar
					width="w-12"
					src="/images/glanbia-cheese-eu.jpeg"
					alt="avatar of Glanbia Cheese EU"
					class="mr-8 h-12" />
				<div class="flex-1">
					<h4>IT Support Officer</h4>
					<h5>Glanbia Cheese EU</h5>
					<h6 class="dark:text-surface-300 text-surface-700">Nov 2019 - Jul 2022</h6>
					<p class="text-justify dark:text-surface-300 text-surface-700 mt-2">
						Overseen and implemented IT infrastructure & systems during the green field build and
						commissioning phase of a €135 million food processing facility. Ensured all the IT
						infrastructure was delivered on-time and under budget. <br />
						Sole IT System Administrator on site supporting all internal IT systems, including servers,
						networks, printers & end user hardware.
					</p>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex">
				<Avatar width="w-12" src="/images/rps.jpeg" alt="avatar of RPS" class="mr-8 h-12" />
				<div class="flex-1">
					<h4>Junior IT Administrator</h4>
					<h5>RPS Group</h5>
					<h6 class="dark:text-surface-300 text-surface-700">Dec 2017 - Nov 2019</h6>
					<p class="text-justify dark:text-surface-300 text-surface-700 mt-2">
						First & second line support role to 2 offices of circa 150 users in a heavily CAD
						focused environment. <br />
						Rolled out Windows 10 3 months earlier than projected.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
