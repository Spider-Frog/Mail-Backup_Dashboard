<script lang="ts">
	import { Button, Input, Modal } from '@sveltestrap/sveltestrap';

	const { id }: {id: number} = $props()
	
	let name = $state("");
	let driver = $state("generic");

	let open = $state(false);
	const toggle = () => (open = !open);

	function reset() {
		name = ""
		driver = "generic"
	}

	function update() {
		console.log(name,  driver)

		open = false;
		reset();
	}

	function close() {
		open = false;
		reset();
	}
</script>

<Button color="primary" on:click="{toggle}">Edit</Button>

<Modal body isOpen={open} {toggle}>
	mail connection {id}
	
	<label>Name:</label>
	<Input type="text" required placeholder="Mail connection name" bind:value={name} />

	<label>Driver:</label>
	<Input type="select" required bind:value={driver}>
		<option value="generic">Generic</option>
		<option value="gmail">Gmail</option>
		<option value="outlook">Outlook</option>
	</Input>

	<div class="mt-3">
		<Button color="primary" on:click="{update}">Edit</Button>
		<Button outline color="dark" on:click="{close}">Close</Button>
	</div>
</Modal>