<script lang="ts">
	let { children, title, type = 'default' }: {children?: unknown, title: string, type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' } = $props();

	const colorClasses = {
		default: '',
		primary: 'bg-primary text-bg-primary',
		success: 'bg-success text-bg-success',
		warning: 'bg-warning text-bg-warning',
		danger: 'bg-danger text-bg-danger'
	};
</script>

<div class="card mb-4 rounded-3 shadow-sm  {colorClasses[type]}">
	<div class="card-header py-3">
		<h4 class="my-0 fw-normal">{title}</h4>
	</div>
	<div class="card-body">
		{@render children?.()}
	</div>
</div>