<script lang="ts">
	// Define performances data
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

	// Sample performances data
	const performances: Performance[] = [
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
				'Eline Solheim conducts the Copenhagen Philharmonic Orchestra in a program of Beethoven and Brahms.',
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
		},
		{
			id: 3,
			date: 'July 15, 2025',
			title: 'Mozart & Mendelssohn',
			program: [
				'Mozart: Overture to "The Magic Flute"',
				'Mozart: Piano Concerto No. 23 in A major, K. 488',
				'Mendelssohn: Symphony No. 4 in A major, Op. 90 "Italian"'
			],
			venue: 'Stockholm Concert Hall',
			location: 'Stockholm, Sweden',
			description: 'A summer concert featuring classic works by Mozart and Mendelssohn.',
			ticketLink: '#'
		},
		{
			id: 4,
			date: 'August 5, 2025',
			title: 'Tchaikovsky Spectacular',
			program: [
				'Tchaikovsky: Romeo and Juliet Fantasy Overture',
				'Tchaikovsky: Violin Concerto in D major, Op. 35',
				'Tchaikovsky: Symphony No. 5 in E minor, Op. 64'
			],
			venue: 'Berlin Philharmonie',
			location: 'Berlin, Germany',
			description:
				"An all-Tchaikovsky program showcasing three of the composer's most beloved works.",
			ticketLink: '#'
		},
		{
			id: 5,
			date: 'September 18, 2025',
			title: 'American Landscapes',
			program: [
				'Copland: Appalachian Spring',
				'Gershwin: Rhapsody in Blue',
				'Bernstein: Symphonic Dances from "West Side Story"',
				'Barber: Adagio for Strings'
			],
			venue: 'Royal Festival Hall',
			location: 'London, UK',
			description: 'A journey through American classical music of the 20th century.',
			ticketLink: '#'
		}
	];
</script>

<div class="bg-slate-50 py-16">
	<div class="container mx-auto max-w-5xl px-4">
		<h1 class="mb-12 text-center font-serif text-5xl text-slate-800">Performances</h1>

		<div class="mb-16">
			<h2 class="mb-6 font-serif text-3xl text-slate-800">Upcoming Concerts</h2>

			{#each performances as performance}
				<div class="mb-8 overflow-hidden rounded-lg bg-white shadow-md">
					<div class="md:flex">
						<div
							class="flex flex-col items-center justify-center bg-slate-800 p-6 text-center text-white md:w-1/4"
						>
							<div class="mb-1 font-serif text-2xl">
								{performance.date.split(',')[0]}
							</div>
							<div class="text-xl">
								{performance.date.split(',')[1]}
							</div>
						</div>

						<div class="p-6 md:w-3/4">
							<h3 class="mb-2 font-serif text-2xl font-semibold">{performance.title}</h3>
							<div class="mb-4 flex flex-col gap-x-4 text-slate-500 md:flex-row md:items-center">
								<div class="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="mr-1 h-5 w-5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
										/>
									</svg>
									{performance.venue}
								</div>
								<div>{performance.location}</div>
							</div>

							<div class="mb-4">
								<h4 class="mb-2 font-medium text-slate-700">Program:</h4>
								<ul class="list-inside list-disc space-y-1 text-slate-600">
									{#each performance.program as piece}
										<li>{piece}</li>
									{/each}
								</ul>
							</div>

							<p class="mb-6 text-slate-600">
								{performance.description}
							</p>

							{#if performance.ticketLink}
								<a
									href={performance.ticketLink}
									class="inline-block rounded bg-slate-800 px-6 py-2 text-white transition-colors hover:bg-slate-700"
								>
									Get Tickets
								</a>
							{:else}
								<button
									disabled
									class="inline-block cursor-not-allowed rounded bg-slate-400 px-6 py-2 text-white"
								>
									Coming Soon
								</button>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center">
			<a
				href="/contact"
				class="inline-block rounded bg-slate-800 px-8 py-3 text-white transition-colors hover:bg-slate-700"
			>
				Booking Inquiries
			</a>
		</div>
	</div>
</div>
