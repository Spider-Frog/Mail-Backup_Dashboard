<script lang="ts">
	const {children, size = "1"}: {size: '1' | '2' | '3' | '4' | '5' | '6'} = $props()
</script>

{#if size === "1"}
	<h1 class="text-5xl font-bold">{@render children?.()}</h1>
{:else if size === "2"}
	<h2 class="text-3xl font-bold">{@render children?.()}</h2>
{:else if size === "3"}
	<h3 class="text-2xl font-bold">{@render children?.()}</h3>
{:else if size === "4"}
	<h4 class="text-xl font-bold">{@render children?.()}</h4>
{:else if size === "5"}
	<h5 class="text-lg font-bold">{@render children?.()}</h5>
{:else if size === "6"}
	<h6 class="font-bold">{@render children?.()}</h6>
{/if}