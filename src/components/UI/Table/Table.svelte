<script lang="ts">
	let { children } = $props();
</script>

<table class="w-full">
	{@render children()}
</table>