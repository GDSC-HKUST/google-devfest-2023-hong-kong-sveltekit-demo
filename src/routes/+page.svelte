<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';

	export let data;
	export let form;
</script>

<div class="flex justify-center">
	{#if $page.data.session?.user}
		Signed in as {$page.data.session.user.name} ({$page.data.session.user.email})
		<button
			on:click={() => signOut()}
			class="w-full md:w-auto justify-center flex cursor-pointer items-center rounded-full border-2 border-black bg-google-yellow px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
			>Sign Out</button
		>
	{:else}
		<button
			on:click={() => signIn('google')}
			class="w-full md:w-auto justify-center flex cursor-pointer items-center rounded-full border-2 border-black bg-google-yellow px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
			>Sign In</button
		>
	{/if}
</div>
<p class="font-semibold">
	Credits: <a
		href="https://neobrutalism-components.vercel.app"
		class="text-google-yellow-dark underline hover:opacity-80">Neobrutalism Components</a
	>
</p>
<form action="?/post" method="POST" use:enhance>
	<label for="message" class="font-semibold">Comment:</label>
	<div class="md:flex gap-2 mt-2">
		<input
			id="message"
			type="text"
			name="message"
			class=" w-full rounded-full border-2 border-black py-[10px] px-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none"
		/>
		<button
			type="submit"
			class="mt-2 md:mt-0 w-full md:w-auto justify-center flex cursor-pointer items-center rounded-full border-2 border-black bg-google-yellow px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
			>Submit</button
		>
	</div>
</form>

<div class="space-y-2">
	<p class="font-semibold">Comments:</p>
	<ul class="space-y-2">
		{#each form?.comments || data.comments as comment}
			<li>
				<span class="text-gray-600 italic"
					>{comment.sender} at {comment.createdAt.toLocaleString()}:</span
				><br />{comment.message}
			</li>
		{/each}
	</ul>
</div>
