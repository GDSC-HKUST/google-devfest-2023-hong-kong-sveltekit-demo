<script>
	import '../app.css';
</script>

<div class="container mx-auto p-4 space-y-8 font-mono">
	<div
		class="relative flex w-full justify-center overflow-x-hidden border-b-2 border-t-2 border-black bg-white font-bold font-mono"
	>
		<div class="animate-marquee whitespace-nowrap py-12">
			<span class="mx-16 text-4xl"> Demo Comment App </span>
			<span class="mx-16 text-4xl"> Demo Comment App </span>
			<span class="mx-16 text-4xl"> Demo Comment App </span>
		</div>
		<div class="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
			<span class="mx-16 text-4xl"> Demo Comment App </span>
			<span class="mx-16 text-4xl"> Demo Comment App </span>
			<span class="mx-16 text-4xl"> Demo Comment App </span>
		</div>
	</div>
	<slot />
</div>
