<script lang="ts">
	// Define media types
	interface VideoItem {
		id: number;
		title: string;
		thumbnail: string;
		description: string;
		date: string;
		videoId: string; // YouTube video ID
		type: 'performance' | 'interview' | 'masterclass';
	}

	// Sample video data
	const videos: VideoItem[] = [
		{
			id: 1,
			title: 'Wilby - Lowry Sketchbook',
			thumbnail: 'https://img.youtube.com/vi/rH9jew0MnRM/hqdefault.jpg',
			description:
				'From the finale of the conducting competition of the European Brass Band Competition.',
			date: 'March 15, 2025',
			videoId: 'rH9jew0MnRM',
			type: 'performance'
		}
		// {
		// 	id: 2,
		// 	title: 'Interview: The Art of Conducting',
		// 	thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
		// 	description:
		// 		'Eline Storheim discusses her approach to conducting and musical interpretation.',
		// 	date: 'February 3, 2025',
		// 	videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
		// 	type: 'interview'
		// },
		// {
		// 	id: 3,
		// 	title: 'Sibelius Violin Concerto',
		// 	thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
		// 	description:
		// 		'Eline Storheim conducts the Stockholm Royal Orchestra with soloist Maria Johansson.',
		// 	date: 'January 20, 2025',
		// 	videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
		// 	type: 'performance'
		// },
		// {
		// 	id: 4,
		// 	title: 'Conducting Masterclass',
		// 	thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
		// 	description:
		// 		'Eline Storheim gives a masterclass on conducting technique at the Royal Danish Academy of Music.',
		// 	date: 'December 5, 2024',
		// 	videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
		// 	type: 'masterclass'
		// }
	];

	// Active tab state
	let activeTab: 'videos' | 'images' = 'videos';

	// Selected video for modal
	let selectedVideo: VideoItem | null = null;
	let isModalOpen = false;

	function openVideoModal(video: VideoItem) {
		selectedVideo = video;
		isModalOpen = true;
	}

	function closeVideoModal() {
		isModalOpen = false;
		selectedVideo = null;
	}

	// Photo modal state
	let selectedPhoto: { src: string; alt: string } | null = null;
	let isPhotoModalOpen = false;
	let currentPhotoIndex = 0;

	function openPhotoModal(photo: { src: string; alt: string }) {
		selectedPhoto = photo;
		isPhotoModalOpen = true;
		// Find the index of the selected photo
		currentPhotoIndex = media.photos.findIndex((p) => p.src === photo.src);
	}

	function closePhotoModal() {
		isPhotoModalOpen = false;
		selectedPhoto = null;
	}

	function nextPhoto() {
		if (currentPhotoIndex < media.photos.length - 1) {
			currentPhotoIndex++;
		} else {
			currentPhotoIndex = 0;
		}
		selectedPhoto = media.photos[currentPhotoIndex];
	}

	function prevPhoto() {
		if (currentPhotoIndex > 0) {
			currentPhotoIndex--;
		} else {
			currentPhotoIndex = media.photos.length - 1;
		}
		selectedPhoto = media.photos[currentPhotoIndex];
	}

	export let data;

	$: media = data.media;
</script>

<svelte:head>
	{#if isModalOpen || isPhotoModalOpen}
		<!-- Prevent scrolling when modal is open -->
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<div class="bg-slate-50 py-16">
	<div class="container mx-auto max-w-6xl px-4">
		<h1 class="mb-12 text-center font-serif text-5xl text-slate-800">Media</h1>

		<!-- Tab navigation -->
		<div class="mb-8 border-b border-slate-200">
			<nav class="flex space-x-8" aria-label="Media categories">
				<button
					class="border-b-2 px-1 py-4 text-lg font-medium {activeTab === 'videos'
						? 'border-slate-800 text-slate-800'
						: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
					on:click={() => (activeTab = 'videos')}
				>
					Videos
				</button>
				<button
					class="border-b-2 px-1 py-4 text-lg font-medium {activeTab === 'images'
						? 'border-slate-800 text-slate-800'
						: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
					on:click={() => (activeTab = 'images')}
				>
					Images
				</button>
			</nav>
		</div>

		<!-- Tab content -->
		{#if activeTab === 'videos'}
			<div>
				<!-- Video grid -->
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each videos as video}
						<div class="overflow-hidden rounded-lg bg-white shadow-md">
							<button class="relative block w-full" on:click={() => openVideoModal(video)}>
								<img
									src={video.thumbnail}
									alt={video.title}
									class="aspect-video w-full object-cover"
								/>
							</button>
							<div class="p-4">
								<div class="mb-1 text-xs font-medium text-slate-500 uppercase">
									{video.type}
								</div>
								<h3 class="mb-2 font-serif text-lg font-semibold">{video.title}</h3>
								<p class="mb-2 text-sm text-slate-600">{video.description}</p>
								<p class="text-sm text-slate-500">{video.date}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{:else if activeTab === 'images'}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each media.photos as photo}
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<div class="p-4">
							<button
								class="w-full border-0 bg-transparent p-0"
								on:click={() => openPhotoModal(photo)}
								aria-label={`View larger image of ${photo.alt}`}
							>
								<img
									src={photo.src}
									alt={photo.alt}
									class="mb-4 aspect-square w-full rounded object-cover"
								/>
							</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<!-- Video Modal -->
{#if isModalOpen && selectedVideo}
	<div class="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-slate-900 p-4">
		<div class="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white">
			<div class="flex items-center justify-between border-b border-slate-200 p-4">
				<h3 class="font-serif text-xl font-semibold">{selectedVideo.title}</h3>
				<button
					on:click={closeVideoModal}
					class="text-slate-500 hover:text-slate-700"
					aria-label="Close video"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="relative pb-[56.25%]">
				<iframe
					class="absolute top-0 left-0 h-full w-full"
					src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
					title={selectedVideo.title}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div class="p-4">
				<p class="mb-2 text-slate-700">{selectedVideo.description}</p>
				<p class="text-sm text-slate-500">{selectedVideo.date}</p>
			</div>
		</div>
	</div>
{/if}

<!-- Photo Modal -->
{#if isPhotoModalOpen && selectedPhoto}
	<div class="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-slate-900 p-4">
		<div class="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white">
			<div class="flex items-center justify-between border-b border-slate-200 p-4">
				<div></div>
				<!-- Empty div to maintain flex spacing -->
				<button
					on:click={closePhotoModal}
					class="text-slate-500 hover:text-slate-700"
					aria-label="Close photo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="relative flex items-center justify-center p-4">
				<!-- Previous photo button -->
				<button
					on:click={prevPhoto}
					class="bg-opacity-70 hover:bg-opacity-100 absolute left-8 rounded-full bg-white p-2 text-slate-700"
					aria-label="Previous photo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>

				<img src={selectedPhoto.src} alt={selectedPhoto.alt} class="max-h-[70vh] object-contain" />

				<!-- Next photo button -->
				<button
					on:click={nextPhoto}
					class="bg-opacity-70 hover:bg-opacity-100 absolute right-8 rounded-full bg-white p-2 text-slate-700"
					aria-label="Next photo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>
		</div>
	</div>
{/if}
