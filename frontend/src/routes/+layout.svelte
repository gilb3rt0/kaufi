<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="font-sigloil min-h-dvh bg-violet-300">
	<h1 class="font-resistance text-8xl font-bold">kaufi</h1>
	{@render children()}
</main>
