<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.error?.message || 'An unknown error occurred.'}</h1>
