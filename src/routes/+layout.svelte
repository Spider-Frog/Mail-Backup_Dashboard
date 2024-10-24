<script lang="ts">
	import '../app.css';
	import Header from '../components/UI/Layout/Header.svelte';
	
	let { children } = $props();
</script>

<Header />
<main class="p-8 flex flex-col gap-4">
	{@render children()}
</main>

