import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	return { params: Object.fromEntries(url.searchParams.entries()) };
};
