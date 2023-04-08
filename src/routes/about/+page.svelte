<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<h1 class="font-bold pt-4 pb-8">About Me</h1>

<div class="p-16 rounded-xl border border-surface-700 bg-surface-800">
	<div class="max-w-[65ch] mx-auto">
		<div class="block md:flex items-center">
			<Avatar width="w-32" src="images/me.jpeg" alt="avatar of Jordan" class="mr-12" />
			<div class="flex-1">
				<h2 class="font-bold">Jordan Harrison</h2>
				<h4>Software Developer I, CXE @ Charles River Labs</h4>
				<h6 class="text-surface-300">
					Creative Full Stack Developer. Web Tech & Open Source Enthusiast.
				</h6>
			</div>
		</div>
		<div class="flex my-4">
			<div class="flex-1">
				<h2 class="font-bold pt-8">Biography</h2>
				<p class="pt-4 text-justify text-surface-300">
					Hey, I'm Jordan. I like to think of myself as a 'creative full stack developer'. Web
					design has been a hobby of mine for more than a decade now, and in 2020 I decided to take
					the leap and pursue a Higher Diploma in Computer Science at SETU Waterfor to turn my hobby
					into a career. I'm a member of the International High IQ Society, an open source
					enthusiast and love tinkering with all things tech. I'm also an avid reader, and am a huge
					fan of the Potterverse.
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
					<h6 class="text-surface-300">2021 - 2023</h6>
					<p class="text-justify text-surface-300 mt-2">
						Graduating with a First Class Honors in late 2023.
					</p>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex pt-4">
				<Avatar width="w-12" src="/images/ait.jpg" alt="avatar of AIT" class="mr-8 h-12" />
				<div class="flex-1">
					<h4>Bachelor of Science in Network Management</h4>
					<h5>Athlone Institute of Technology</h5>
					<h6 class="text-surface-300">2014 - 2017</h6>
					<p class="text-justify text-surface-300 mt-2">Graduated with a Merit Grade 2 in 2017.</p>
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
					class="mr-8 h-12"
				/>
				<div class="flex-1">
					<h4>Software Developer I, CXE</h4>
					<h5>Charles River Labs</h5>
					<h6 class="text-surface-300">Jan 2023 - Present</h6>
					<p class="text-justify text-surface-300 mt-2">
						Working in a full stack capacity on the MVP of an internal user management application.
						Migrated the app from Webpack to Vite (and Jest to Vitest) in early stages to improve
						DevEx. Tech stack: NodeJS, Fastify, React, Azure, CosmosDB, Gremlin Query Language.
					</p>
					<hr class="my-4" />
					<h4>Associate Software Developer, CXE</h4>
					<h5>Charles River Labs</h5>
					<h6 class="text-surface-300">Jul 2022 - Dec 2022</h6>
					<p class="text-justify text-surface-300 mt-2">
						Worked on the frontend of Apollo, a large client-facing application, from MVP stage -
						implementing new functionality and working with large datasets. Tech Stack: NodeJS,
						Fastify, React, Jest, Cypress, Azure.
					</p>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex">
				<Avatar
					width="w-12"
					src="/images/glanbia-cheese-eu.jpeg"
					alt="avatar of Glanbia Cheese EU"
					class="mr-8 h-12"
				/>
				<div class="flex-1">
					<h4>IT Support Officer</h4>
					<h5>Glanbia Cheese EU</h5>
					<h6 class="text-surface-300">Nov 2019 - Jul 2022</h6>
					<p class="text-justify text-surface-300 mt-2">
						Overseen and implemented IT infrastructure & systems during the green field build and
						commissioning phase of a €135 million processing facility. Sole IT System Administrator
						on site supporting all internal IT systems, including servers, networks, printers & end
						user hardware.
					</p>
				</div>
			</div>
			<hr class="my-4" />
			<div class="flex">
				<Avatar width="w-12" src="/images/rps.jpeg" alt="avatar of RPS" class="mr-8 h-12" />
				<div class="flex-1">
					<h4>Junior IT Administrator</h4>
					<h5>RPS Group</h5>
					<h6 class="text-surface-300">Dec 2017 - Nov 2019</h6>
					<p class="text-justify text-surface-300 mt-2">
						First & second line support role to 2 offices of circa 150 users in a heavily CAD
						focused environment. Responsible for the rollout of Windows 10 before Windows 7 became
						EOL.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
