<script lang="ts">
	// Import components or assets as needed
	export let data;

	$: about = data.about;
	$: title = about.title;
	$: description = about.description;
</script>

<div class="py-16">
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
						<li><span class="font-medium">Based in:</span> Kristiansand, Norway</li>
						<li>
							<span class="font-medium">Education:</span> Norwegian Academy of Music, University of Stavanger
						</li>
						<li><span class="font-medium">Languages:</span> Norwegian, English</li>
					</ul>
				</div>
			</div>

			<div class="prose prose-slate prose-lg md:w-2/3">
				<p style="white-space: pre-line;">{description}</p>
			</div>
		</div>
	</div>
</div>
