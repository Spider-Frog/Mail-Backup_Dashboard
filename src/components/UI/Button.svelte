<script lang="ts">
	let { children, type = 'info' }: {children?: unknown, type?: 'info' | 'success' | 'warning' | 'danger' } = $props();

	const colorClasses = {
		info: 'bg-blue-500 hover:bg-blue-600',
		success: 'bg-emerald-500 hover:bg-emerald-600',
		warning: 'bg-yellow-500 hover:bg-yellow-600',
		danger: 'bg-red-500 hover:bg-red-600'
	};
</script>

<button class="rounded px-3 py-1 text-white {colorClasses[type]}">
	{@render children?.()}
</button>
