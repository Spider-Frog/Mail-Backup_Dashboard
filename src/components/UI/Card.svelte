<script lang="ts">
	let { children } = $props();
</script>

<div class="border-2 border-gray-200 rounded-md shadow-sm flex-1 p-4">
	{@render children?.()}
</div>