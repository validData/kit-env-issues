import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { PRIVATE_BAR } from '$env/static/private';

export const load: PageServerLoad = () => {
	return {
		staticIsValid: PRIVATE_BAR === 'bar',
		dynamicIsValid: env.PRIVATE_BAR === 'bar'
	};
};
