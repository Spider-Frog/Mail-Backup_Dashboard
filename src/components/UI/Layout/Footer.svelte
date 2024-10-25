<script>
	import Icon from '../Icon.svelte';
</script>

<div class="container">
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
		<p class="col-md-4 mb-0 text-body-secondary">Mail Backup V0.1</p>

		<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
			<Icon name="mail" />
		</a>

		<ul class="nav col-md-4 justify-content-end">
			<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
			<li class="nav-item"><a href="/mail" class="nav-link px-2 text-body-secondary">Mail</a></li>
			<li class="nav-item"><a href="/config" class="nav-link px-2 text-body-secondary">Configurations</a></li>
		</ul>
	</footer>
</div>