<script lang="ts">
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let isSubmitting = false;
	let isSubmitted = false;
	let error = '';

	function handleSubmit() {
		// Prevent empty submissions
		if (!name || !email || !message) {
			error = 'Please fill out all required fields.';
			return;
		}

		// Reset error
		error = '';

		// Simulate form submission
		isSubmitting = true;

		// In a real app, you would send this data to your backend
		setTimeout(() => {
			isSubmitting = false;
			isSubmitted = true;

			// Reset form
			name = '';
			email = '';
			subject = '';
			message = '';
		}, 1000);
	}
</script>

<div class="bg-slate-50 py-16">
	<div class="container mx-auto max-w-4xl px-4">
		<h1 class="mb-12 text-center font-serif text-5xl text-slate-800">Contact</h1>

		<div class="mb-16 grid gap-12 md:grid-cols-2">
			<div>
				<h2 class="mb-6 font-serif text-3xl text-slate-800">Get in Touch</h2>
				<div class="prose prose-slate prose-lg max-w-none">
					<p>
						For booking inquiries, press requests, or any other matters, please use the contact form
						or reach out directly using the information below.
					</p>

					<div class="not-prose mt-8 space-y-4">
						<div class="flex items-start">
							<div class="mt-1 mr-3 text-slate-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-medium text-slate-800">Email</h3>
								<a
									href="mailto:contact@elinestorheim.com"
									class="text-slate-600 hover:text-slate-900"
								>
									contact@elinestorheim.com
								</a>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mt-1 mr-3 text-slate-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-medium text-slate-800">Management</h3>
								<p class="text-slate-600">
									Nordic Arts Management<br />
									Gyldenløvesgade 13<br />
									1600 Copenhagen, Denmark
								</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mt-1 mr-3 text-slate-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-lg font-medium text-slate-800">Press Inquiries</h3>
								<a
									href="mailto:press@elinestorheim.com"
									class="text-slate-600 hover:text-slate-900"
								>
									press@elinestorheim.com
								</a>
							</div>
						</div>
					</div>

					<div class="mt-8">
						<h3 class="mb-4 text-lg font-medium text-slate-800">Follow</h3>
						<div class="flex space-x-4">
							<a href="/" class="text-slate-700 hover:text-slate-900">
								<span class="sr-only">Instagram</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
							<a href="/" class="text-slate-700 hover:text-slate-900">
								<span class="sr-only">Twitter</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/>
								</svg>
							</a>
							<a href="/" class="text-slate-700 hover:text-slate-900">
								<span class="sr-only">YouTube</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
							<a href="/" class="text-slate-700 hover:text-slate-900">
								<span class="sr-only">Facebook</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div>
				{#if isSubmitted}
					<div class="rounded-lg bg-white p-8 shadow-md">
						<div class="text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="mx-auto mb-4 h-16 w-16 text-green-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<h2 class="mb-2 font-serif text-2xl text-slate-800">Thank You!</h2>
							<p class="mb-6 text-slate-600">
								Your message has been sent successfully. We will get back to you soon.
							</p>
							<button
								on:click={() => (isSubmitted = false)}
								class="inline-block rounded bg-slate-800 px-6 py-2 text-white transition-colors hover:bg-slate-700"
							>
								Send Another Message
							</button>
						</div>
					</div>
				{:else}
					<div class="rounded-lg bg-white p-8 shadow-md">
						<h2 class="mb-6 font-serif text-2xl text-slate-800">Contact Form</h2>

						{#if error}
							<div class="mb-6 border-l-4 border-red-500 bg-red-50 p-4">
								<div class="flex">
									<div class="flex-shrink-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="h-5 w-5 text-red-500"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
											/>
										</svg>
									</div>
									<div class="ml-3">
										<p class="text-sm text-red-700">
											{error}
										</p>
									</div>
								</div>
							</div>
						{/if}

						<form on:submit|preventDefault={handleSubmit}>
							<div class="mb-4">
								<label for="name" class="mb-2 block text-slate-700">Name *</label>
								<input
									type="text"
									id="name"
									bind:value={name}
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
									required
								/>
							</div>

							<div class="mb-4">
								<label for="email" class="mb-2 block text-slate-700">Email *</label>
								<input
									type="email"
									id="email"
									bind:value={email}
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
									required
								/>
							</div>

							<div class="mb-4">
								<label for="subject" class="mb-2 block text-slate-700">Subject</label>
								<input
									type="text"
									id="subject"
									bind:value={subject}
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-6">
								<label for="message" class="mb-2 block text-slate-700">Message *</label>
								<textarea
									id="message"
									bind:value={message}
									rows="5"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
									required
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full rounded bg-slate-800 py-3 text-white transition-colors hover:bg-slate-700 disabled:bg-slate-400"
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</button>
						</form>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
