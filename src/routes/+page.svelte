<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	export let data;
	export let form;
</script>

{#if $page.data.session?.user}
	Signed in as {$page.data.session.user.name} ({$page.data.session.user.email})
	<button on:click={() => signOut()}>Sign Out</button>
{:else}
	<button on:click={() => signIn('google')}>Sign In</button>
{/if}

<form action="?/post" method="POST">
	Comment:
	<input type="text" name="message" />
	<button type="submit">Submit</button>
</form>

<ul>
	{#each form?.comments || data.comments as comment}
		<li>{comment.sender}: {comment.message}</li>
	{/each}
</ul>
