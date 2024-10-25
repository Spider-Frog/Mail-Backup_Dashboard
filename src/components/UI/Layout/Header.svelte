<script>
import Icon from '../Icon.svelte';
</script>

<header class="p-3 text-bg-dark">
	<div class="container">
		<nav class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
			<a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
				<Icon name="mail" />
			</a>

			<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
				<li><a href="/mail" class="nav-link px-2 text-white">Mail</a></li>
				<li><a href="/config" class="nav-link px-2 text-white">Configurations</a></li>
			</ul>

			<div class="text-end">
				<button type="button" class="btn btn-outline-light me-2">Login</button>
			</div>
		</nav>
	</div>
</header>