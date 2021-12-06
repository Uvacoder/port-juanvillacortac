import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await resolve(request)

	response.headers['Cache-Control'] = `public, s-maxage=1, stale-while-revalidate=59`

	return response
};
