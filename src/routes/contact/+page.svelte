<h1 class="font-bold pt-4 pb-8">Contact</h1>
<div class="container mx-auto p-16 bg-surface-100 dark:bg-surface-800 rounded-xl my-4 border border-surface-300 dark:border-surface-700">
	<form action="https://formspree.io/f/xpzeoagn" method="POST" class="space-y-1">
		<label class="label" for="name">Name</label>
		<input class="input" type="text" name="name" id="name" placeholder="Your Name" />
		<label class="label" for="email">Email</label>
		<input class="input" type="email" name="_replyto" id="email" placeholder="your@email.com" />
		<label class="label" for="subject">Subject</label>
		<input class="input" type="text" name="subject" id="subject" placeholder="Subject" />
		<label class="label" for="message">Message</label>
		<textarea
			class="input"
			name="message"
			rows="4"
			id="message"
			placeholder="Insert your message here..." />
		<button class="btn variant-ghost-primary" type="submit">Send</button>
	</form>
</div>
