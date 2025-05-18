<script lang="ts">
	import { onMount } from 'svelte';

	// Authentication state
	let isLoggedIn = false;
	let isLoading = true;
	let username = '';
	let password = '';
	let loginError = '';

	// Content management
	let activeSection: 'performances' | 'media' | 'press' = 'performances';

	// Mock data for demo purposes
	interface Performance {
		id: number;
		date: string;
		title: string;
		program: string[];
		venue: string;
		location: string;
		description: string;
		ticketLink?: string;
	}

	let performances: Performance[] = [
		{
			id: 1,
			date: 'June 10, 2025',
			title: 'Beethoven & Brahms',
			program: [
				'Beethoven: Symphony No. 7 in A major, Op. 92',
				'Brahms: Violin Concerto in D major, Op. 77'
			],
			venue: 'Royal Danish Concert Hall',
			location: 'Copenhagen, Denmark',
			description:
				'Eline Storheim conducts the Copenhagen Philharmonic Orchestra in a program of Beethoven and Brahms.',
			ticketLink: '#'
		},
		{
			id: 2,
			date: 'June 24, 2025',
			title: 'Nordic Impressions',
			program: [
				'Sibelius: Finlandia, Op. 26',
				'Grieg: Piano Concerto in A minor, Op. 16',
				'Nielsen: Symphony No. 4, Op. 29 "The Inextinguishable"'
			],
			venue: 'Oslo Concert Hall',
			location: 'Oslo, Norway',
			description:
				'A celebration of Nordic composers, featuring works by Sibelius, Grieg, and Nielsen.',
			ticketLink: '#'
		}
	];

	// Demo credentials (in a real app, this would be handled securely on the backend)
	const DEMO_USERNAME = 'eline';
	const DEMO_PASSWORD = 'admin123';

	// Form data for creating new performances
	let newPerformance: Performance = {
		id: 0,
		date: '',
		title: '',
		program: [''],
		venue: '',
		location: '',
		description: '',
		ticketLink: ''
	};

	// Form validation
	let formErrors = {
		date: '',
		title: '',
		venue: '',
		location: '',
		program: '',
		description: ''
	};

	// Selected item for editing
	let editingPerformance: Performance | null = null;

	// Simulate checking authentication
	onMount(() => {
		// Check if user is already logged in (e.g., from localStorage or session)
		// In a real app, you'd verify with a backend service
		const storedAuthState = localStorage.getItem('adminLoggedIn');

		if (storedAuthState === 'true') {
			isLoggedIn = true;
		}

		isLoading = false;
	});

	// Mock login function
	function handleLogin() {
		if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
			isLoggedIn = true;
			loginError = '';
			localStorage.setItem('adminLoggedIn', 'true');
		} else {
			loginError = 'Invalid username or password';
		}
	}

	// Mock logout function
	function handleLogout() {
		isLoggedIn = false;
		localStorage.removeItem('adminLoggedIn');
	}

	// Add a new program item
	function addProgramItem() {
		if (editingPerformance) {
			editingPerformance.program = [...editingPerformance.program, ''];
		} else {
			newPerformance.program = [...newPerformance.program, ''];
		}
	}

	// Remove a program item
	function removeProgramItem(index: number) {
		if (editingPerformance) {
			editingPerformance.program = editingPerformance.program.filter((_, i) => i !== index);
		} else {
			newPerformance.program = newPerformance.program.filter((_, i) => i !== index);
		}
	}

	// Handle program item change
	function handleProgramItemChange(index: number, value: string) {
		if (editingPerformance) {
			editingPerformance.program = editingPerformance.program.map((item, i) =>
				i === index ? value : item
			);
		} else {
			newPerformance.program = newPerformance.program.map((item, i) =>
				i === index ? value : item
			);
		}
	}

	// Validate performance form
	function validatePerformanceForm(performance: Performance): boolean {
		// Reset errors
		formErrors = {
			date: '',
			title: '',
			venue: '',
			location: '',
			program: '',
			description: ''
		};

		let isValid = true;

		// Check required fields
		if (!performance.date.trim()) {
			formErrors.date = 'Date is required';
			isValid = false;
		}

		if (!performance.title.trim()) {
			formErrors.title = 'Title is required';
			isValid = false;
		}

		if (!performance.venue.trim()) {
			formErrors.venue = 'Venue is required';
			isValid = false;
		}

		if (!performance.location.trim()) {
			formErrors.location = 'Location is required';
			isValid = false;
		}

		// Check that at least one program item is not empty
		if (
			performance.program.length === 0 ||
			!performance.program.some((item) => item.trim() !== '')
		) {
			formErrors.program = 'At least one program item is required';
			isValid = false;
		}

		if (!performance.description.trim()) {
			formErrors.description = 'Description is required';
			isValid = false;
		}

		return isValid;
	}

	// Success message state
	let showSuccessMessage = false;
	let successMessageText = '';

	// Hide success message after a delay
	function hideSuccessMessage() {
		setTimeout(() => {
			showSuccessMessage = false;
		}, 3000);
	}

	// Save new performance
	function savePerformance() {
		const performanceToSave = editingPerformance || newPerformance;

		// Validate form
		if (!validatePerformanceForm(performanceToSave)) {
			// Form has errors, don't save
			return;
		}

		if (editingPerformance) {
			// Update existing performance
			const currentPerformance = editingPerformance;

			performances = performances.map((p) => {
				if (p.id === currentPerformance.id) {
					// Create a complete Performance object from editingPerformance
					return {
						id: currentPerformance.id,
						date: currentPerformance.date,
						title: currentPerformance.title,
						program: currentPerformance.program,
						venue: currentPerformance.venue,
						location: currentPerformance.location,
						description: currentPerformance.description,
						ticketLink: currentPerformance.ticketLink ?? '' // Use nullish coalescing
					};
				}
				return p;
			});
			// Set success message
			successMessageText = `Performance "${currentPerformance.title}" has been updated.`;
			showSuccessMessage = true;
			hideSuccessMessage();

			// Reset editing state
			editingPerformance = null;
		} else {
			// Add new performance
			const nextId = Math.max(0, ...performances.map((p) => p.id)) + 1;
			performances = [...performances, { ...newPerformance, id: nextId }];

			// Set success message
			successMessageText = `New performance "${newPerformance.title}" has been added.`;
			showSuccessMessage = true;
			hideSuccessMessage();

			// Reset form
			newPerformance = {
				id: 0,
				date: '',
				title: '',
				program: [''],
				venue: '',
				location: '',
				description: '',
				ticketLink: ''
			};
		}

		// Reset form errors
		formErrors = {
			date: '',
			title: '',
			venue: '',
			location: '',
			program: '',
			description: ''
		};
	}

	// Edit performance
	function editPerformance(performance: Performance) {
		editingPerformance = { ...performance };
	}

	// Delete performance
	function deletePerformance(id: number) {
		if (confirm('Are you sure you want to delete this performance?')) {
			performances = performances.filter((p) => p.id !== id);
			if (editingPerformance?.id === id) {
				editingPerformance = null;
			}
		}
	}

	// Cancel editing
	function cancelEditing() {
		editingPerformance = null;
	}
</script>

<svelte:head>
	<title>Admin Dashboard | Eline Storheim</title>
</svelte:head>

{#if isLoading}
	<div class="flex min-h-screen items-center justify-center">
		<div class="h-16 w-16 animate-spin rounded-full border-b-2 border-slate-800"></div>
	</div>
{:else if !isLoggedIn}
	<!-- Login Page -->
	<div class="min-h-screen bg-slate-100 py-16">
		<div class="container mx-auto max-w-md px-4">
			<div class="rounded-lg bg-white p-8 shadow-md">
				<h1 class="mb-8 text-center font-serif text-3xl text-slate-800">Admin Login</h1>

				{#if loginError}
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
								<p class="text-sm text-red-700">{loginError}</p>
							</div>
						</div>
					</div>
				{/if}

				<form on:submit|preventDefault={handleLogin}>
					<div class="mb-4">
						<label for="username" class="mb-2 block text-slate-700">Username</label>
						<input
							type="text"
							id="username"
							bind:value={username}
							class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
							required
						/>
					</div>

					<div class="mb-6">
						<label for="password" class="mb-2 block text-slate-700">Password</label>
						<input
							type="password"
							id="password"
							bind:value={password}
							class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
							required
						/>
					</div>

					<button
						type="submit"
						class="w-full rounded bg-slate-800 py-3 text-white transition-colors hover:bg-slate-700"
					>
						Log In
					</button>

					<div class="mt-4 text-center text-sm text-slate-500">
						<p>Demo credentials: eline / admin123</p>
					</div>
				</form>
			</div>
		</div>
	</div>
{:else}
	<!-- Admin Dashboard -->
	<div class="min-h-screen bg-slate-100">
		<!-- Admin Header -->
		<header class="bg-slate-800 py-4 text-white">
			<div class="container mx-auto flex items-center justify-between px-4">
				<h1 class="font-serif text-2xl">Eline Storheim Admin</h1>
				<button on:click={handleLogout} class="rounded bg-slate-700 px-4 py-2 hover:bg-slate-600">
					Log Out
				</button>
			</div>
		</header>

		<div class="container mx-auto px-4 py-8">
			<!-- Admin Navigation -->
			<div class="mb-8 border-b border-slate-200">
				<nav class="flex space-x-8" aria-label="Admin sections">
					<button
						class="border-b-2 px-1 py-4 font-medium {activeSection === 'performances'
							? 'border-slate-800 text-slate-800'
							: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
						on:click={() => (activeSection = 'performances')}
					>
						Performances
					</button>
					<button
						class="border-b-2 px-1 py-4 font-medium {activeSection === 'media'
							? 'border-slate-800 text-slate-800'
							: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
						on:click={() => (activeSection = 'media')}
					>
						Media
					</button>
					<button
						class="border-b-2 px-1 py-4 font-medium {activeSection === 'press'
							? 'border-slate-800 text-slate-800'
							: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
						on:click={() => (activeSection = 'press')}
					>
						Press
					</button>
				</nav>
			</div>

			{#if activeSection === 'performances'}
				<div>
					<h2 class="mb-6 font-serif text-2xl">Manage Performances</h2>

					<!-- Add/Edit Performance Form -->
					<div class="mb-8 rounded-lg bg-white p-6 shadow-md">
						<h3 class="mb-4 font-serif text-xl">
							{editingPerformance ? 'Edit Performance' : 'Add New Performance'}
						</h3>

						{#if showSuccessMessage}
							<div
								class="mb-6 border-l-4 border-green-500 bg-green-50 p-4"
								role="alert"
								aria-live="polite"
							>
								<div class="flex">
									<div class="flex-shrink-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="h-5 w-5 text-green-500"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div class="ml-3">
										<p class="text-sm text-green-700">{successMessageText}</p>
									</div>
								</div>
							</div>
						{/if}

						<div class="grid gap-4 md:grid-cols-2">
							<div class="mb-4">
								<label for="date-input" class="mb-2 block text-slate-700">Date</label>
								{#if editingPerformance}
									<input
										id="date-input"
										type="text"
										placeholder="e.g., June 10, 2025"
										bind:value={editingPerformance.date}
										class="w-full border px-3 py-2 {formErrors.date
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.date}
										aria-describedby={formErrors.date ? 'date-error' : undefined}
									/>
								{:else}
									<input
										id="date-input"
										type="text"
										placeholder="e.g., June 10, 2025"
										bind:value={newPerformance.date}
										class="w-full border px-3 py-2 {formErrors.date
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.date}
										aria-describedby={formErrors.date ? 'date-error' : undefined}
									/>
								{/if}
								{#if formErrors.date}
									<p id="date-error" class="mt-1 text-sm text-red-600">{formErrors.date}</p>
								{/if}
							</div>

							<div class="mb-4">
								<label for="title-input" class="mb-2 block text-slate-700">Title</label>
								{#if editingPerformance}
									<input
										id="title-input"
										type="text"
										placeholder="Concert Title"
										bind:value={editingPerformance.title}
										class="w-full border px-3 py-2 {formErrors.title
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.title}
										aria-describedby={formErrors.title ? 'title-error' : undefined}
									/>
								{:else}
									<input
										id="title-input"
										type="text"
										placeholder="Concert Title"
										bind:value={newPerformance.title}
										class="w-full border px-3 py-2 {formErrors.title
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.title}
										aria-describedby={formErrors.title ? 'title-error' : undefined}
									/>
								{/if}
								{#if formErrors.title}
									<p id="title-error" class="mt-1 text-sm text-red-600">{formErrors.title}</p>
								{/if}
							</div>

							<div class="mb-4">
								<label for="venue-input" class="mb-2 block text-slate-700">Venue</label>
								{#if editingPerformance}
									<input
										id="venue-input"
										type="text"
										placeholder="Concert Hall Name"
										bind:value={editingPerformance.venue}
										class="w-full border px-3 py-2 {formErrors.venue
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.venue}
										aria-describedby={formErrors.venue ? 'venue-error' : undefined}
									/>
								{:else}
									<input
										id="venue-input"
										type="text"
										placeholder="Concert Hall Name"
										bind:value={newPerformance.venue}
										class="w-full border px-3 py-2 {formErrors.venue
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.venue}
										aria-describedby={formErrors.venue ? 'venue-error' : undefined}
									/>
								{/if}
								{#if formErrors.venue}
									<p id="venue-error" class="mt-1 text-sm text-red-600">{formErrors.venue}</p>
								{/if}
							</div>

							<div class="mb-4">
								<label for="location-input" class="mb-2 block text-slate-700">Location</label>
								{#if editingPerformance}
									<input
										id="location-input"
										type="text"
										placeholder="City, Country"
										bind:value={editingPerformance.location}
										class="w-full border px-3 py-2 {formErrors.location
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.location}
										aria-describedby={formErrors.location ? 'location-error' : undefined}
									/>
								{:else}
									<input
										id="location-input"
										type="text"
										placeholder="City, Country"
										bind:value={newPerformance.location}
										class="w-full border px-3 py-2 {formErrors.location
											? 'border-red-500'
											: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
										aria-invalid={!!formErrors.location}
										aria-describedby={formErrors.location ? 'location-error' : undefined}
									/>
								{/if}
								{#if formErrors.location}
									<p id="location-error" class="mt-1 text-sm text-red-600">{formErrors.location}</p>
								{/if}
							</div>
						</div>

						<div class="mb-4">
							<label id="program-label" class="mb-2 block text-slate-700">Program</label>
							{#if editingPerformance}
								{#each editingPerformance.program as item, i}
									<div class="mb-2 flex">
										<input
											type="text"
											id={`program-item-${i}`}
											aria-labelledby="program-label"
											placeholder="e.g., Composer: Work, Op. 123"
											value={item}
											on:input={(e) => handleProgramItemChange(i, e.currentTarget.value)}
											class="flex-1 border px-3 py-2 {formErrors.program &&
											editingPerformance.program.every((p) => !p.trim())
												? 'border-red-500'
												: 'border-slate-300'} rounded-l focus:ring-2 focus:ring-slate-500 focus:outline-none"
											aria-invalid={!!formErrors.program &&
												editingPerformance.program.every((p) => !p.trim())}
										/>
										<button
											type="button"
											on:click={() => removeProgramItem(i)}
											class="rounded-r bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
											aria-label={`Remove program item ${i + 1}`}
											disabled={editingPerformance.program.length <= 1}
										>
											✕
										</button>
									</div>
								{/each}
							{:else}
								{#each newPerformance.program as item, i}
									<div class="mb-2 flex">
										<input
											type="text"
											id={`program-item-${i}`}
											aria-labelledby="program-label"
											placeholder="e.g., Composer: Work, Op. 123"
											value={item}
											on:input={(e) => handleProgramItemChange(i, e.currentTarget.value)}
											class="flex-1 border px-3 py-2 {formErrors.program &&
											newPerformance.program.every((p) => !p.trim())
												? 'border-red-500'
												: 'border-slate-300'} rounded-l focus:ring-2 focus:ring-slate-500 focus:outline-none"
											aria-invalid={!!formErrors.program &&
												newPerformance.program.every((p) => !p.trim())}
										/>
										<button
											type="button"
											on:click={() => removeProgramItem(i)}
											class="rounded-r bg-red-100 px-3 py-2 text-red-700 hover:bg-red-200"
											aria-label={`Remove program item ${i + 1}`}
											disabled={newPerformance.program.length <= 1}
										>
											✕
										</button>
									</div>
								{/each}
							{/if}
							{#if formErrors.program}
								<p id="program-error" class="mt-1 text-sm text-red-600">{formErrors.program}</p>
							{/if}
							<button
								type="button"
								on:click={addProgramItem}
								class="mt-2 flex items-center text-slate-600 hover:text-slate-800"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="mr-1 h-5 w-5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
								</svg>
								Add Program Item
							</button>
						</div>

						<div class="mb-4">
							<label for="description-textarea" class="mb-2 block text-slate-700">Description</label
							>
							{#if editingPerformance}
								<textarea
									id="description-textarea"
									placeholder="Concert description"
									bind:value={editingPerformance.description}
									rows="3"
									class="w-full border px-3 py-2 {formErrors.description
										? 'border-red-500'
										: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
									aria-invalid={!!formErrors.description}
									aria-describedby={formErrors.description ? 'description-error' : undefined}
								></textarea>
							{:else}
								<textarea
									id="description-textarea"
									placeholder="Concert description"
									bind:value={newPerformance.description}
									rows="3"
									class="w-full border px-3 py-2 {formErrors.description
										? 'border-red-500'
										: 'border-slate-300'} rounded focus:ring-2 focus:ring-slate-500 focus:outline-none"
									aria-invalid={!!formErrors.description}
									aria-describedby={formErrors.description ? 'description-error' : undefined}
								></textarea>
							{/if}
							{#if formErrors.description}
								<p id="description-error" class="mt-1 text-sm text-red-600">
									{formErrors.description}
								</p>
							{/if}
						</div>

						<div class="mb-6">
							<label for="ticket-link-input" class="mb-2 block text-slate-700"
								>Ticket Link (optional)</label
							>
							{#if editingPerformance}
								<input
									id="ticket-link-input"
									type="text"
									placeholder="https://..."
									bind:value={editingPerformance.ticketLink}
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							{:else}
								<input
									id="ticket-link-input"
									type="text"
									placeholder="https://..."
									bind:value={newPerformance.ticketLink}
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							{/if}
						</div>

						<div class="flex justify-end space-x-4">
							{#if editingPerformance}
								<button
									type="button"
									on:click={cancelEditing}
									class="rounded border border-slate-300 px-4 py-2 hover:bg-slate-50"
								>
									Cancel
								</button>
							{/if}
							<button
								type="button"
								on:click={savePerformance}
								class="rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
							>
								{editingPerformance ? 'Update Performance' : 'Add Performance'}
							</button>
						</div>
					</div>

					<!-- Performances List -->
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<h3 class="border-b border-slate-200 p-4 font-serif text-xl">Current Performances</h3>

						{#if performances.length === 0}
							<div class="p-6 text-center text-slate-500">
								No performances found. Add your first performance above.
							</div>
						{:else}
							<div class="overflow-x-auto">
								<table class="w-full">
									<thead class="bg-slate-50">
										<tr>
											<th class="px-4 py-3 text-left font-medium text-slate-700">Date</th>
											<th class="px-4 py-3 text-left font-medium text-slate-700">Title</th>
											<th class="px-4 py-3 text-left font-medium text-slate-700">Location</th>
											<th class="px-4 py-3 text-right font-medium text-slate-700">Actions</th>
										</tr>
									</thead>
									<tbody class="divide-y divide-slate-200">
										{#each performances as performance}
											<tr class="hover:bg-slate-50">
												<td class="px-4 py-3">{performance.date}</td>
												<td class="px-4 py-3">{performance.title}</td>
												<td class="px-4 py-3">{performance.location}</td>
												<td class="px-4 py-3 text-right">
													<div class="flex justify-end space-x-3">
														<button
															type="button"
															on:click={() => editPerformance(performance)}
															class="px-2 py-1 text-blue-600 hover:text-blue-800"
															aria-label={`Edit ${performance.title}`}
														>
															Edit
														</button>
														<button
															type="button"
															on:click={() => deletePerformance(performance.id)}
															class="px-2 py-1 text-red-600 hover:text-red-800"
															aria-label={`Delete ${performance.title}`}
														>
															Delete
														</button>
													</div>
												</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						{/if}
					</div>
				</div>
			{:else if activeSection === 'media'}
				<div>
					<h2 class="mb-6 font-serif text-2xl">Manage Media</h2>

					<!-- Add/Edit Media Form -->
					<div class="mb-8 rounded-lg bg-white p-6 shadow-md">
						<h3 class="mb-4 font-serif text-xl">Add New Media</h3>

						<form class="grid gap-4 md:grid-cols-2">
							<div class="mb-4 md:col-span-2">
								<label for="media-type" class="mb-2 block text-slate-700">Media Type</label>
								<select
									id="media-type"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								>
									<option value="video">Video</option>
									<option value="audio">Audio Recording</option>
									<option value="image">Image</option>
								</select>
							</div>

							<div class="mb-4 md:col-span-2">
								<label for="media-title" class="mb-2 block text-slate-700">Title</label>
								<input
									id="media-title"
									type="text"
									placeholder="Media Title"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4 md:col-span-2">
								<label for="media-url" class="mb-2 block text-slate-700">URL / Embed Code</label>
								<textarea
									id="media-url"
									rows="3"
									placeholder="YouTube embed code, SoundCloud link, etc."
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								></textarea>
								<p class="mt-1 text-sm text-slate-500">
									For videos, paste the YouTube/Vimeo embed code. For audio, use SoundCloud/Spotify
									links.
								</p>
							</div>

							<div class="mb-4">
								<label for="media-date" class="mb-2 block text-slate-700">Date</label>
								<input
									id="media-date"
									type="text"
									placeholder="e.g., May 2025"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4">
								<label for="media-category" class="mb-2 block text-slate-700">Category</label>
								<input
									id="media-category"
									type="text"
									placeholder="e.g., Performances, Interviews"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4 md:col-span-2">
								<label for="media-description" class="mb-2 block text-slate-700">Description</label>
								<textarea
									id="media-description"
									placeholder="Brief description of the media content"
									rows="3"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								></textarea>
							</div>

							<div class="flex justify-end md:col-span-2">
								<button
									type="button"
									class="rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
								>
									Add Media
								</button>
							</div>
						</form>
					</div>

					<!-- Media List with Tabs -->
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<div class="border-b border-slate-200">
							<div class="flex">
								<button class="border-b-2 border-slate-800 px-4 py-2 font-medium text-slate-800">
									Videos
								</button>
								<button
									class="border-b-2 border-transparent px-4 py-2 text-slate-600 hover:text-slate-800"
								>
									Audio
								</button>
								<button
									class="border-b-2 border-transparent px-4 py-2 text-slate-600 hover:text-slate-800"
								>
									Images
								</button>
							</div>
						</div>

						<div class="p-4">
							<p class="py-8 text-center text-slate-600">No media items added yet.</p>
							<!-- Media items will be listed here -->
						</div>
					</div>
				</div>
			{:else if activeSection === 'press'}
				<div>
					<h2 class="mb-6 font-serif text-2xl">Manage Press</h2>

					<!-- Add Press Article Form -->
					<div class="mb-8 rounded-lg bg-white p-6 shadow-md">
						<h3 class="mb-4 font-serif text-xl">Add Press Article or Review</h3>

						<form class="grid gap-4 md:grid-cols-2">
							<div class="mb-4 md:col-span-2">
								<label for="press-title" class="mb-2 block text-slate-700">Title</label>
								<input
									id="press-title"
									type="text"
									placeholder="Article Title"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4">
								<label for="press-publication" class="mb-2 block text-slate-700">Publication</label>
								<input
									id="press-publication"
									type="text"
									placeholder="e.g., The New York Times"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4">
								<label for="press-date" class="mb-2 block text-slate-700">Date</label>
								<input
									id="press-date"
									type="text"
									placeholder="e.g., May 15, 2025"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4 md:col-span-2">
								<label for="press-url" class="mb-2 block text-slate-700">Article URL</label>
								<input
									id="press-url"
									type="text"
									placeholder="https://..."
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								/>
							</div>

							<div class="mb-4 md:col-span-2">
								<label for="press-excerpt" class="mb-2 block text-slate-700">Excerpt or Quote</label
								>
								<textarea
									id="press-excerpt"
									placeholder="A short excerpt or notable quote from the article"
									rows="3"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								></textarea>
							</div>

							<div class="mb-4">
								<label for="press-type" class="mb-2 block text-slate-700">Type</label>
								<select
									id="press-type"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								>
									<option value="review">Review</option>
									<option value="interview">Interview</option>
									<option value="feature">Feature Article</option>
									<option value="news">News</option>
								</select>
							</div>

							<div class="mb-4">
								<label for="press-language" class="mb-2 block text-slate-700">Language</label>
								<select
									id="press-language"
									class="w-full rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
								>
									<option value="en">English</option>
									<option value="no">Norwegian</option>
									<option value="dk">Danish</option>
									<option value="de">German</option>
									<option value="fr">French</option>
								</select>
							</div>

							<div class="flex justify-end md:col-span-2">
								<button
									type="button"
									class="rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
								>
									Add Press Article
								</button>
							</div>
						</form>
					</div>

					<!-- Press List -->
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<h3 class="border-b border-slate-200 p-4 font-serif text-xl">
							Press Articles & Reviews
						</h3>

						<div class="p-4">
							<div class="mb-4 flex justify-between">
								<div>
									<label for="press-filter" class="sr-only">Filter press</label>
									<select
										id="press-filter"
										class="rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
									>
										<option value="all">All Types</option>
										<option value="review">Reviews</option>
										<option value="interview">Interviews</option>
										<option value="feature">Features</option>
									</select>
								</div>

								<div>
									<label for="press-sort" class="sr-only">Sort press</label>
									<select
										id="press-sort"
										class="rounded border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
									>
										<option value="date-desc">Newest First</option>
										<option value="date-asc">Oldest First</option>
										<option value="publication">By Publication</option>
									</select>
								</div>
							</div>

							<p class="py-8 text-center text-slate-600">No press articles added yet.</p>
							<!-- Press items will be listed here -->
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
