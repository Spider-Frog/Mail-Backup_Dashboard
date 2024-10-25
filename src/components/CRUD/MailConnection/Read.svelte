<script>
import { Table } from '@sveltestrap/sveltestrap';
import MailConnectionUpdate from './Update.svelte';
import MailConnectionDelete from './Delete.svelte';
</script>

<Table striped borderd>
	<thead>
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Driver</th>
		<th>Created At</th>
		<th>Last Modified</th>
		<th></th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>1</td>
		<td>Gmail spiderfrog</td>
		<td>GMAIL</td>
		<td>2024-02-03 13:23:34</td>
		<td>2024-02-03 13:23:34</td>
		<td>
			<MailConnectionUpdate id="{1}" />
			<MailConnectionDelete id="{1}" />
		</td>
	</tr>
	</tbody>
</Table>