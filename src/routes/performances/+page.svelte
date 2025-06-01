<script lang="ts">
	// Define performances data
	interface Performance {
		id: number;
		date: string;
		title: string;
		location: string;
		infoLink?: string;
	}

	// Sample performances data
	const performances: Performance[] = [
		{
			id: 1,
			date: 'June 10, 2025',
			title: 'Sandnes Symfoniorkester',
			location: 'Sandnes, Norway',
			infoLink:
				'https://www.facebook.com/events/1204855261091752/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1074165608096267%7D%7D]%22%7D'
		},
		{
			id: 2,
			date: 'July 26, 2025',
			title: 'Sunnhordaland Sumarkorps 2025',
			location: 'Stord, Norway'
		},
		{
			id: 3,
			date: 'September 20, 2025',
			title: 'Nanset Blåseensemble',
			location: 'Nanset, Norway'
		},
		{
			id: 4,
			date: 'October 19, 2025',
			title: 'Kristiansand Janitsjar',
			location: 'Kristiansand, Norway'
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
								<div>{performance.location}</div>
							</div>

							{#if performance.infoLink}
								<a
									href={performance.infoLink}
									class="inline-block rounded bg-slate-800 px-6 py-2 text-white transition-colors hover:bg-slate-700"
								>
									Info
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
