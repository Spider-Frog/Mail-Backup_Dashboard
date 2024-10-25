<header class="p-3 text-bg-dark">
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">Dashboard</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a href="/messages">
								<button class="btn btn-dark">
									Messages
								</button>
							</a>
						</li>
						<li class="nav-item">
							<a href="/tasks">
								<button class="btn btn-dark">
									Tasks
								</button>
							</a>
						</li>
						<li class="nav-item dropdown">
							<button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Configurations
							</button>
							<ul class="dropdown-menu dropdown-menu-dark">
								<li><a class="dropdown-item" href="/config/mail">Mail</a></li>
								<li><a class="dropdown-item" href="/config/storage">Storage</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a href="/users">
								<button class="btn btn-dark">
									Users
								</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>