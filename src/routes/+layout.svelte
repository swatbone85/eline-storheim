<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
	let isMenuOpen = $state(false);

	// Toggle mobile menu
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Navigation links
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		// { href: '/performances', label: 'Performances' },
		{ href: '/media', label: 'Media' }
		// { href: '/contact', label: 'Contact' }
	];
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-espresso sticky top-0 z-50 text-white shadow-sm">
		<div class="container mx-auto px-4">
			<nav class="flex items-center justify-between py-4">
				<!-- Logo/Name -->
				<a href="/" class="font-serif text-2xl font-bold">Eline Storheim</a>

				<!-- Desktop Navigation -->
				<div class="hidden items-center space-x-8 md:flex">
					{#each navLinks as link}
						<a
							href={link.href}
							class="transition-colors {$page.url.pathname === link.href
								? 'border-b-2 border-white font-medium'
								: ''}"
						>
							{link.label}
						</a>
					{/each}
				</div>

				<!-- Mobile menu button -->
				<button class="p-2 text-slate-700 md:hidden" onclick={toggleMenu} aria-label="Toggle menu">
					{#if isMenuOpen}
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
					{:else}
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
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					{/if}
				</button>
			</nav>

			<!-- Mobile Navigation -->
			{#if isMenuOpen}
				<div class="border-t border-slate-100 py-4 md:hidden">
					<div class="flex flex-col space-y-4">
						{#each navLinks as link}
							<a
								href={link.href}
								class="text-slate-600 transition-colors hover:text-slate-900 {$page.url.pathname ===
								link.href
									? 'font-medium'
									: ''}"
								onclick={() => (isMenuOpen = false)}
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</header>

	<div class="bg-cream flex-grow">
		{@render children()}
	</div>

	<footer class="bg-espresso py-8 text-white">
		<div class="container mx-auto px-4 text-center">
			<p>&copy; {new Date().getFullYear()} Eline Storheim. All rights reserved.</p>
			<div class="mt-4 flex justify-center gap-6">
				<a
					href="https://www.muvac.com/en/profile/eline-storheim"
					class="text-white hover:text-slate-300"
					target="_blank"
				>
					Muvac</a
				>
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
