<script>
	import Nav from './Nav.svelte';
	import NavItem from './NavItem.svelte';
	import Heading from '../Heading.svelte';
</script>

<header class="bg-neutral-100 shadow flex justify-between px-2">
	<NavItem href="/"><Heading size="2">Mail Backup</Heading></NavItem>
	<Nav />
</header>