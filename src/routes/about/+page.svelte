<script lang="ts">
	// Import components or assets as needed
	export let data;

	$: about = data.about;
	$: title = about.title;
	$: description = about.description;
	$: image = about.image;
	$: console.log('Page title:', title);
</script>

<div class="bg-slate-50 py-16">
	<div class="container mx-auto max-w-4xl px-4">
		<h1 class="mb-12 text-center font-serif text-5xl text-slate-800">{title}</h1>

		<div class="mb-16 flex flex-col gap-10 md:flex-row">
			<div class="md:w-1/3">
				<!-- Placeholder for profile image -->
				<div class="mb-4 aspect-[3/4] rounded-lg">
					<div class="flex h-full items-center justify-center">
						<img src="/images/profile.jpg" alt="" />
					</div>
				</div>

				<!-- Quick facts -->
				<div class="rounded-lg bg-white p-6 shadow-md">
					<h3 class="mb-4 font-serif text-xl font-semibold">Quick Facts</h3>
					<ul class="space-y-2 text-slate-700">
						<li><span class="font-medium">Nationality:</span> Norwegian</li>
						<li><span class="font-medium">Based in:</span> Copenhagen, Denmark</li>
						<li><span class="font-medium">Education:</span> Royal Danish Academy of Music</li>
						<li><span class="font-medium">Languages:</span> Norwegian, Danish, English, German</li>
					</ul>
				</div>
			</div>

			<div class="prose prose-slate prose-lg md:w-2/3">
				<h2>Biography</h2>
				<p>{description}</p>
			</div>
		</div>

		<!-- Testimonials section -->
		<section class="mb-16">
			<h2 class="mb-8 text-center font-serif text-3xl text-slate-800">Critical Acclaim</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-lg bg-white p-6 shadow-md">
					<p class="mb-4 text-slate-700 italic">
						"storheim conducts with remarkable clarity and purpose. Her interpretation of Sibelius
						brought new insights to even the most familiar passages."
					</p>
					<div class="text-right text-slate-600">
						<p class="font-medium">— The Copenhagen Music Review</p>
					</div>
				</div>

				<div class="rounded-lg bg-white p-6 shadow-md">
					<p class="mb-4 text-slate-700 italic">
						"A rising star in the conducting world, storheim draws extraordinary colors from the
						orchestra. Her Mahler was both intellectually rigorous and emotionally stirring."
					</p>
					<div class="text-right text-slate-600">
						<p class="font-medium">— Classical Music Today</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
