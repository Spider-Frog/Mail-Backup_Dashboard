<script lang="ts">
	let { children }: {children?: unknown } = $props();
</script>

<th class="border border-black text-left bg-neutral-200 p-2 text-lg">
	{@render children?.()}
</th>