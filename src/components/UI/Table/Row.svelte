<script lang="ts">
	let { children } = $props();
</script>

<tr class="odd:bg-neutral-100 even:bg-neutral-200">
	{@render children()}
</tr>