<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Modal } from '$lib/components/ui/modal';

	let open = $state(false);
</script>

<main class="flex h-svh place-items-center justify-center">
	<Button onclick={() => (open = true)}>Open Modal</Button>
	<Modal bind:open>Hello there</Modal>
</main>
