<script lang="ts">
	import "@fontsource/geist-mono"
	import "@fontsource/geist-sans"
	import { ModeWatcher } from "mode-watcher"
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher/>
{@render children()}
