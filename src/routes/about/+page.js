import { PUBLIC_WORDPRESS_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// Use the WordPress container hostname instead of localhost
	const wpApiUrl = PUBLIC_WORDPRESS_API_URL || 'http://wordpress:80';

	// Fallback object to ensure the about page always has a structure
	const fallbackAbout = {
		title: 'About Eline Storheim',
		description: `Eline Storheim (1999) is a conductor from Manger, a village known for its strong musical traditions on the west coast of Norway. Now based in Kristiansand, she has studied conducting at both the Norwegian Academy of Music (Norges Musikkhøgskole) and at the University of Stavanger.

Eline works with a wide variety of ensembles, from orchestras and wind bands to choirs and contemporary groups. Through participation in several masterclasses — including with Stavanger Symphony Orchestra — she continues to develop and refine a flexible and responsive approach to conducting.

She is currently part of Dirigentkollektivet, a national talent development program for young conductors organized by Dirigentløftet. In 2025, she was awarded 2nd place in the European Brass Band Association's (EBBA) international conducting competition.
`
	};

	try {
		const res = await fetch(`${wpApiUrl}/wp-json/wp/v2/pages?slug=about`);

		if (!res.ok) {
			return {
				about: fallbackAbout,
			}
		}

		const data = await res.json();

		// The API returns an array, but we only need the first item since we're querying by slug
		return {
			about: data[0].acf || null
		};
	} catch (error) {
		console.error('Error loading about page:', error);
		return {
			about: fallbackAbout,
			error: 'Failed to load about page content'
		};
	}
}
