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

	interface AudioItem {
		id: number;
		title: string;
		composer: string;
		orchestra: string;
		date: string;
		duration: string;
		coverImage: string;
	}

	interface PressItem {
		id: number;
		title: string;
		publication: string;
		date: string;
		excerpt: string;
		link: string;
	}

	// Sample video data
	const videos: VideoItem[] = [
		{
			id: 1,
			title: 'Beethoven Symphony No. 7',
			thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
			description:
				"Eline Solheim conducts the Copenhagen Philharmonic in Beethoven's Symphony No. 7.",
			date: 'March 15, 2025',
			videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
			type: 'performance'
		},
		{
			id: 2,
			title: 'Interview: The Art of Conducting',
			thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
			description: 'Eline Solheim discusses her approach to conducting and musical interpretation.',
			date: 'February 3, 2025',
			videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
			type: 'interview'
		},
		{
			id: 3,
			title: 'Sibelius Violin Concerto',
			thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
			description:
				'Eline Solheim conducts the Stockholm Royal Orchestra with soloist Maria Johansson.',
			date: 'January 20, 2025',
			videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
			type: 'performance'
		},
		{
			id: 4,
			title: 'Conducting Masterclass',
			thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
			description:
				'Eline Solheim gives a masterclass on conducting technique at the Royal Danish Academy of Music.',
			date: 'December 5, 2024',
			videoId: 'dQw4w9WgXcQ', // This is just a placeholder YouTube ID
			type: 'masterclass'
		}
	];

	// Sample audio recordings
	const recordings: AudioItem[] = [
		{
			id: 1,
			title: 'Symphony No. 4 "The Inextinguishable"',
			composer: 'Carl Nielsen',
			orchestra: 'Copenhagen Philharmonic',
			date: 'April 2025',
			duration: '36:24',
			coverImage: 'https://placehold.co/400x400/e2e8f0/1e293b?text=Nielsen+No.+4'
		},
		{
			id: 2,
			title: 'Piano Concerto No. 2',
			composer: 'Sergei Rachmaninoff',
			orchestra: 'Oslo Philharmonic',
			date: 'March 2025',
			duration: '42:15',
			coverImage: 'https://placehold.co/400x400/e2e8f0/1e293b?text=Rachmaninoff'
		},
		{
			id: 3,
			title: 'Symphony No. 5',
			composer: 'Jean Sibelius',
			orchestra: 'Finnish Radio Symphony Orchestra',
			date: 'November 2024',
			duration: '31:48',
			coverImage: 'https://placehold.co/400x400/e2e8f0/1e293b?text=Sibelius+No.+5'
		}
	];

	// Sample press mentions
	const press: PressItem[] = [
		{
			id: 1,
			title: 'Eline Solheim: A Rising Star in the Conducting World',
			publication: 'Classical Music Today',
			date: 'May 2, 2025',
			excerpt:
				'Eline Solheim has quickly established herself as one of the most compelling young conductors in Europe, with interpretations that reveal new aspects of even the most familiar works...',
			link: '#'
		},
		{
			id: 2,
			title: 'Review: Solheim Brings Fresh Perspective to Mahler',
			publication: 'The Copenhagen Music Review',
			date: 'April 15, 2025',
			excerpt:
				"In her interpretation of Mahler's Symphony No. 4, Solheim demonstrated a remarkable sensitivity to the work's delicate textures while never losing sight of its dramatic arc...",
			link: '#'
		},
		{
			id: 3,
			title: 'Interview: Eline Solheim on Women in Classical Music',
			publication: 'Nordic Arts Journal',
			date: 'March 8, 2025',
			excerpt:
				'In our exclusive interview, conductor Eline Solheim discusses the changing landscape for women in classical music and her initiative to mentor young female conductors...',
			link: '#'
		}
	];

	// Active tab state
	let activeTab: 'videos' | 'recordings' | 'press' = 'videos';

	// Active video filter
	let videoFilter: 'all' | 'performance' | 'interview' | 'masterclass' = 'all';

	// Filtered videos based on selected type
	$: filteredVideos =
		videoFilter === 'all' ? videos : videos.filter((video) => video.type === videoFilter);

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
</script>

<svelte:head>
	{#if isModalOpen}
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
					class="border-b-2 px-1 py-4 text-lg font-medium {activeTab === 'recordings'
						? 'border-slate-800 text-slate-800'
						: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
					on:click={() => (activeTab = 'recordings')}
				>
					Recordings
				</button>
				<button
					class="border-b-2 px-1 py-4 text-lg font-medium {activeTab === 'press'
						? 'border-slate-800 text-slate-800'
						: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}"
					on:click={() => (activeTab = 'press')}
				>
					Press
				</button>
			</nav>
		</div>

		<!-- Tab content -->
		{#if activeTab === 'videos'}
			<div>
				<!-- Video filters -->
				<div class="mb-8 flex flex-wrap gap-2">
					<button
						class="rounded-full px-4 py-2 {videoFilter === 'all'
							? 'bg-slate-800 text-white'
							: 'bg-slate-200 text-slate-700 hover:bg-slate-300'}"
						on:click={() => (videoFilter = 'all')}
					>
						All Videos
					</button>
					<button
						class="rounded-full px-4 py-2 {videoFilter === 'performance'
							? 'bg-slate-800 text-white'
							: 'bg-slate-200 text-slate-700 hover:bg-slate-300'}"
						on:click={() => (videoFilter = 'performance')}
					>
						Performances
					</button>
					<button
						class="rounded-full px-4 py-2 {videoFilter === 'interview'
							? 'bg-slate-800 text-white'
							: 'bg-slate-200 text-slate-700 hover:bg-slate-300'}"
						on:click={() => (videoFilter = 'interview')}
					>
						Interviews
					</button>
					<button
						class="rounded-full px-4 py-2 {videoFilter === 'masterclass'
							? 'bg-slate-800 text-white'
							: 'bg-slate-200 text-slate-700 hover:bg-slate-300'}"
						on:click={() => (videoFilter = 'masterclass')}
					>
						Masterclasses
					</button>
				</div>

				<!-- Video grid -->
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each filteredVideos as video}
						<div class="overflow-hidden rounded-lg bg-white shadow-md">
							<button class="relative block w-full" on:click={() => openVideoModal(video)}>
								<img
									src={video.thumbnail}
									alt={video.title}
									class="aspect-video w-full object-cover"
								/>
								<div
									class="bg-opacity-20 absolute inset-0 flex items-center justify-center bg-slate-900"
								>
									<div
										class="bg-opacity-70 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="h-8 w-8 text-white"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
											/>
										</svg>
									</div>
								</div>
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

				{#if filteredVideos.length === 0}
					<div class="py-10 text-center">
						<p class="text-slate-500">No videos found for the selected filter.</p>
					</div>
				{/if}
			</div>
		{:else if activeTab === 'recordings'}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each recordings as recording}
					<div class="overflow-hidden rounded-lg bg-white shadow-md">
						<div class="p-4">
							<img
								src={recording.coverImage}
								alt={recording.title}
								class="mb-4 aspect-square w-full rounded object-cover"
							/>
							<h3 class="mb-1 font-serif text-lg font-semibold">{recording.title}</h3>
							<p class="mb-3 text-slate-600">{recording.composer}</p>
							<div class="flex justify-between text-sm text-slate-500">
								<span>{recording.orchestra}</span>
								<span>{recording.date}</span>
							</div>
							<div class="mt-4 text-sm text-slate-500">
								<span>Duration: {recording.duration}</span>
							</div>
							<div class="mt-4 flex justify-between">
								<button class="flex items-center text-slate-700 hover:text-slate-900">
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
											d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
										/>
									</svg>
									Listen
								</button>
								<button class="flex items-center text-slate-700 hover:text-slate-900">
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
											d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44L10.5 4.19z"
										/>
									</svg>
									Buy
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else if activeTab === 'press'}
			<div class="space-y-8">
				{#each press as item}
					<div class="rounded-lg bg-white p-6 shadow-md">
						<div class="mb-2 flex items-center text-sm text-slate-500">
							<span>{item.publication}</span>
							<span class="mx-2">•</span>
							<span>{item.date}</span>
						</div>
						<h3 class="mb-3 font-serif text-xl font-semibold">{item.title}</h3>
						<p class="mb-4 text-slate-600">"{item.excerpt}"</p>
						<a
							href={item.link}
							class="inline-flex items-center font-medium text-slate-800 hover:underline"
						>
							Read Full Article
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="ml-1 h-4 w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
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
