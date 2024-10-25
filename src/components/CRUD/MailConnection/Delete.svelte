<script lang="ts">
	import { Button, Modal } from '@sveltestrap/sveltestrap';
	
	const { id }: {id: number} = $props()

	let open = $state(false);
	const toggle = () => (open = !open);

	function confirm() {
		open = false;
	}

	function close() {
		open = false;
	}
</script>

<Button color="danger" on:click="{toggle}">Delete</Button>

<Modal body isOpen={open} {toggle}>
	<p>
		Confirm deleting mail connection {id}?
	</p>

	<div class="mt-3">
		<Button color="danger" on:click="{confirm}">Confirm</Button>
		<Button outline color="dark" on:click="{close}">Close</Button>
	</div>
</Modal>