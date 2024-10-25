<script>
	import Heading from '../../components/UI/Heading.svelte';
	import Table from '../../components/UI/Table/Table.svelte';
	import TableRow from '../../components/UI/Table/Row.svelte';
	import TableHead from '../../components/UI/Table/Head.svelte';
	import TableData from '../../components/UI/Table/Data.svelte';
	import Button from '../../components/UI/Button.svelte';
</script>

<Heading>Configurations</Heading>
<hr/>
<Table>
	<thead>
		<TableRow>
			<TableHead>
				#
			</TableHead>
			<TableHead>
				Name
			</TableHead>
			<TableHead>
				Messages
			</TableHead>
			<TableHead>
	
			</TableHead>
		</TableRow>
	</thead>
	<tbody>
	<TableRow>
		<TableData>
			1
		</TableData>
		<TableData>
			Gmail
		</TableData>
		<TableData>
			Name
		</TableData>
		<TableData>
			<Button type="success">
				Edit
			</Button>
			<Button type="danger">
				Delete
			</Button>
		</TableData>
	</TableRow>
	<TableRow>
		<TableData>
			1
		</TableData>
		<TableData>
			Gmail
		</TableData>
		<TableData>
			Name
		</TableData>
		<TableData>
			<Button type="success">
				Edit
			</Button>
			<Button type="danger">
				Delete
			</Button>
		</TableData>
	</TableRow>
	<TableRow>
		<TableData>
			1
		</TableData>
		<TableData>
			Gmail
		</TableData>
		<TableData>
			Name
		</TableData>
		<TableData>
			<Button type="success">
				Edit
			</Button>
			<Button type="danger">
				Delete
			</Button>
		</TableData>
	</TableRow>
	</tbody>
</Table>