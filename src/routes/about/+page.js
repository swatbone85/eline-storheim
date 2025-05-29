/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// Use the WordPress container hostname instead of localhost
	const wpApiUrl = import.meta.env.PUBLIC_WORDPRESS_API_URL || 'http://wordpress:80';

	try {
		const res = await fetch(`${wpApiUrl}/wp-json/wp/v2/pages?slug=about`);

		if (!res.ok) {
			throw new Error(`Error fetching about page: ${res.status}`);
		}

		const data = await res.json();

		// The API returns an array, but we only need the first item since we're querying by slug
		return {
			about: data[0] || null
		};
	} catch (error) {
		console.error('Error loading about page:', error);
		return {
			about: null,
			error: 'Failed to load about page content'
		};
	}
}
