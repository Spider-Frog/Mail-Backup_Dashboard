<script lang="ts">
	let { children }: {children?: unknown } = $props();
</script>

<td class="border border-black p-2 text-lg">
	{@render children()}
</td>