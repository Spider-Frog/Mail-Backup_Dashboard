<script lang="ts">
	let { children }: {children?: unknown } = $props();
</script>

<button class="border rounded">
	{@render children?.()}
</button>