import prisma from '$lib/server/prisma.js';

export async function load({ locals }) {
	const user = (await locals.getSession())?.user;
	console.log((user ? `${user.name} (${user.email})` : 'Anonymous') + ' is visiting the page!');
	return {
		comments: await getComments()
	};
}

export const actions = {
	post: async ({ locals, request }) => {
		const data = await request.formData();
		const message = data.get('message');
		if (!(typeof message === 'string')) throw new Error('Invalid message');
		await prisma.comment.create({
			data: {
				message,
				sender: (await locals.getSession())?.user?.name || 'Anonymous'
			}
		});

		return {
			comments: await getComments()
		};
	}
};

async function getComments() {
	return (await prisma.comment.findMany()).sort((a, b) => {
		return b.createdAt.getTime() - a.createdAt.getTime();
	});
}
