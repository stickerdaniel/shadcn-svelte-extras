<script lang="ts">
	import { shortcut } from '$lib/actions/shortcut.svelte';
	import { toast } from 'svelte-sonner';
</script>

<svelte:window
	use:shortcut={{ key: '1', ctrl: true, callback: () => toast.success('You pressed Ctrl + 1') }}
/>

