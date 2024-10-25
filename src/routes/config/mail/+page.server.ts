import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		mailConnections: [
			{
				id: 1,
				name: 'GermanSpiderFrog mailbox',
				driver: 'gmail',
				createdAt: new Date().toLocaleDateString(),
				lastModified: new Date().toLocaleDateString()
			},
			{
				id: 2,
				name: 'GermanSpiderFrog mailbox',
				driver: 'outlook',
				createdAt: new Date().toLocaleDateString(),
				lastModified: new Date().toLocaleDateString()
			},
			{
				id: 1,
				name: 'GermanSpiderFrog mailbox',
				driver: 'gmail',
				createdAt: new Date().toLocaleDateString(),
				lastModified: new Date().toLocaleDateString()
			},
			{
				id: 2,
				name: 'GermanSpiderFrog mailbox',
				driver: 'outlook',
				createdAt: new Date().toLocaleDateString(),
				lastModified: new Date().toLocaleDateString()
			},
			{
				id: 1,
				name: 'GermanSpiderFrog mailbox',
				driver: 'gmail',
				createdAt: new Date().toLocaleDateString(),
				lastModified: new Date().toLocaleDateString()
			},
			{
				id: 2,
				name: 'GermanSpiderFrog mailbox',
				driver: 'outlook',
				createdAt: new Date().toLocaleDateString(),
				lastModified: new Date().toLocaleDateString()
			}
		]
	};
};

export const actions = {
	create: async (event) => {
		// create new mail connection
		console.log("createing new event lol")
		return { success: true };
	}
} satisfies Actions;