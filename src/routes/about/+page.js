/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	try {
		const res = await fetch('http://localhost:8000/wp-json/wp/v2/pages?slug=about');

		if (!res.ok) {
			throw new Error(`Error fetching about page: ${res.status}`);
		}

		const data = await res.json();

		const about = data[0].acf;

		// The API returns an array, but we only need the first item since we're querying by slug
		return {
			about: about
		};
	} catch (error) {
		console.error('Error loading about page:', error);
		return {
			about: null,
			error: 'Failed to load about page content'
		};
	}
}
