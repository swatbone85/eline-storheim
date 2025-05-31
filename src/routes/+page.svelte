<script lang="ts">
	// Import necessary components and assets if needed
</script>

<div class="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
	<main class="container mx-auto max-w-5xl px-4 py-16">
		<!-- Hero section -->
		<section class="mb-20 text-center">
			<h1 class="mb-6 font-serif text-5xl font-bold text-slate-800 md:text-6xl lg:text-7xl">
				Eline Storheim
			</h1>
			<p class="mb-8 text-xl text-slate-600 italic md:text-2xl">Classical Conductor</p>

			<div class="mx-auto mb-10 aspect-[16/9] w-full max-w-3xl bg-slate-300">
				<!-- Placeholder for hero image - replace with actual image when available -->
				<div class="flex h-full items-center justify-center text-slate-500">
					<img src="/images/hero.jpg" alt="" />
				</div>
			</div>
		</section>

		<!-- Biography preview section -->
		<section class="mb-20">
			<h2 class="mb-6 text-center font-serif text-3xl text-slate-800 md:text-4xl">Biography</h2>
			<div class="prose prose-lg mx-auto text-slate-700">
				<p>
					Originally from Manger, just outside of Bergen, and currently based in Kristiansand, Eline
					is a Norwegian conductor with a background from the Norwegian Academy of Music and the
					University of Stavanger. She works across a broad range of ensembles and is continually
					developing as a conductor through competitions, masterclasses, and national talent
					programs.
				</p>
				<div class="mt-6 text-center">
					<a
						href="/about"
						class="inline-block rounded bg-slate-800 px-6 py-3 text-white transition-colors hover:bg-slate-700"
					>
						Read More
					</a>
				</div>
			</div>
		</section>

		<!-- Upcoming performances section -->
		<!-- <section class="mb-20">
			<h2 class="mb-6 text-center font-serif text-3xl text-slate-800 md:text-4xl">
				Upcoming Performances
			</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _, i}
					<div class="rounded-lg bg-white p-6 shadow-md">
						<div class="mb-2 text-sm text-slate-500">June {10 + i}, 2025</div>
						<h3 class="mb-2 font-serif text-xl font-semibold">Beethoven Symphony No. {7 - i}</h3>
						<p class="mb-4 text-slate-600">Copenhagen Philharmonic Orchestra</p>
						<div class="text-sm text-slate-500">Royal Danish Concert Hall</div>
					</div>
				{/each}
				<div class="mt-6 text-center md:col-span-2 lg:col-span-3">
					<a
						href="/performances"
						class="inline-block rounded bg-slate-800 px-6 py-3 text-white transition-colors hover:bg-slate-700"
					>
						View All Performances
					</a>
				</div>
			</div>
		</section> -->

		<!-- Contact section -->
		<section>
			<h2 class="mb-6 text-center font-serif text-3xl text-slate-800 md:text-4xl">Contact</h2>
			<div class="mx-auto max-w-2xl text-center">
				<p class="mb-6 text-lg text-slate-700">For bookings, interviews, and other inquiries:</p>
				<a href="mailto:eline@storheim.no" class="text-xl text-slate-800 hover:underline">
					eline@storheim.no
				</a>
			</div>
		</section>
	</main>

	<footer class="bg-slate-800 py-8 text-white">
		<div class="container mx-auto px-4 text-center">
			<p>&copy; {new Date().getFullYear()} Eline Storheim. All rights reserved.</p>
			<div class="mt-4 flex justify-center gap-6">
				<a
					href="https://www.instagram.com/storheimen/"
					class="text-white hover:text-slate-300"
					target="_blank"
				>
					Instagram</a
				>

				<a
					href="https://www.facebook.com/eline.storheim"
					class="text-white hover:text-slate-300"
					target="_blank">Facebook</a
				>
			</div>
		</div>
	</footer>
</div>
