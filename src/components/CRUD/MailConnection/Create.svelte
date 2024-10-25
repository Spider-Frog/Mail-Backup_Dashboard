<script lang="ts">
	import { Button, Input, Modal } from '@sveltestrap/sveltestrap';
	import { enhance } from '$app/forms';
	
	let name = $state("");
	let driver = $state("generic");

	let open = $state(false);
	const toggle = () => (open = !open);
</script>

<Button color="success" on:click="{toggle}">New connection</Button>

<Modal body isOpen={open} {toggle}>
	<form 
		method="POST"
		action="/config/mail?/create"
		use:enhance={() => {
			return async ({result}) => {
				console.log(result)
			}
		}}
	>
		<label for="name">Name:</label>
		<Input name="conn_name" type="text" required placeholder="Mail connection name" bind:value={name} minlength={1} maxlength={32} />

		<label for="driver">Driver:</label>
		<Input name="driver" type="select" required bind:value={driver}>
			<option value="generic">Generic</option>
			<option value="gmail">Gmail</option>
			<option value="outlook">Outlook</option>
		</Input>

		<div class="mt-3">
			<Button color="success">Create</Button>
			<Button type="button" outline color="dark" on:click="{toggle}">Close</Button>
		</div>
	</form>
</Modal>
