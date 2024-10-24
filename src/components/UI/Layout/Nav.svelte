<script>
import NavItem from './NavItem.svelte';
import Icon from '../Icon.svelte';
</script>

<nav class="flex">
	<NavItem href="/mail"><Icon name="mail" />Mail</NavItem>
	<NavItem href="/config"><Icon name="settings" />Configurations</NavItem>
</nav>