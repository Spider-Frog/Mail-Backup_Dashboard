<script lang="ts">
	const {children, size = "1"}: {children?: unknown, size?: '1' | '2' | '3' | '4' | '5' | '6'} = $props()
</script>

{#if size === "1"}
	<h1 class="display-1 fw-normal text-body-emphasis">{@render children?.()}</h1>
{:else if size === "2"}
	<h2 class="display-2 fw-normal text-body-emphasis">{@render children?.()}</h2>
{:else if size === "3"}
	<h3 class="display-3 fw-normal text-body-emphasis">{@render children?.()}</h3>
{:else if size === "4"}
	<h4 class="display-4 fw-normal text-body-emphasis">{@render children?.()}</h4>
{:else if size === "5"}
	<h5 class="display-5 fw-normal text-body-emphasis">{@render children?.()}</h5>
{:else if size === "6"}
	<h6 class="display-6 fw-normal text-body-emphasis">{@render children?.()}</h6>
{/if}