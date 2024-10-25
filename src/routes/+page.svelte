<script>
import Card from '../components/UI/Card.svelte';
import Heading from '../components/UI/Heading.svelte';
</script>

<Heading>Dashboard</Heading>
<hr />
<div class="row row-cols-1 row-cols-md-4 mb-3 text-center">
	<div class="col">
		<Card title="Messages" type="primary">
			<Heading size="6">45 processed</Heading>
		</Card>
	</div>
	<div class="col">
		<Card title="Configurations" type="success">
			<Heading size="6">4 active</Heading>
		</Card>
	</div>
	<div class="col">
		<Card title="Runs" type="warning">
			<Heading size="6">6 runs</Heading>
		</Card>
	</div>
	<div class="col">
		<Card title="test" type="danger">
			<Heading size="6">2 Errors</Heading>
		</Card>
	</div>
</div>