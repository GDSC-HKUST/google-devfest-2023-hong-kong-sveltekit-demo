<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	export let data;
	export let form;
</script>

{#if $page.data.session?.user}
	Signed in as {$page.data.session.user.name} ({$page.data.session.user.email})
	<button on:click={() => signOut()} class="py-1.5 px-2.5 rounded-md">Sign Out</button>
{:else}
	<button on:click={() => signIn('google')} class="border py-1.5 px-2.5 rounded-md">Sign In</button>
{/if}

<form action="?/post" method="POST" use:enhance class="space-y-2">
	<label for="message">Comment:</label>
	<div class="md:flex gap-2">
		<input id="message" type="text" name="message" class="border py-1.5 px-2.5 rounded-md w-full" />
		<button
			type="submit"
			class="w-full mt-2 md:mt-0 md:w-auto border py-1.5 px-2.5 rounded-md hover:bg-gray-50"
			>Submit</button
		>
	</div>
</form>

<ul class="list-disc list-inside">
	{#each form?.comments || data.comments as comment}
		<li>{comment.sender} at {comment.createdAt.toLocaleString()}: {comment.message}</li>
	{/each}
</ul>
