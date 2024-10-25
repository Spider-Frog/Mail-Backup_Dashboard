<script lang="ts">
	import Header from '../components/UI/Layout/Header.svelte';
	import Footer from '../components/UI/Layout/Footer.svelte';
	
	let { children } = $props();
</script>

<Header />
<main class="container mt-5">
	{@render children()}
</main>

<Footer />