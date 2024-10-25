<script lang="ts">
import MailConnectionCreate from '../../../components/CRUD/MailConnection/Create.svelte';
import type { PageData } from './$types';
import MailConnectionUpdate from '../../../components/CRUD/MailConnection/Update.svelte';
import { Button, Table } from '@sveltestrap/sveltestrap';
import MailConnectionDelete from '../../../components/CRUD/MailConnection/Delete.svelte';

export let data: PageData;
</script>

<h1 class="mb-4">Mail Connections</h1>
<hr class="my-4">
<Table striped>
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
	{#each data.mailConnections as item}
		<tr>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.driver}</td>
			<td>{item.createdAt}</td>
			<td>{item.lastModified}</td>
			<td>
				<MailConnectionUpdate id="{item.id}" />
				<MailConnectionDelete id="{item.id}" />
			</td>
		</tr>
	{/each}
	</tbody>
</Table>

<MailConnectionCreate />