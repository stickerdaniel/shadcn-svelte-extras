<script lang="ts">
	import { Snippet } from '$lib/components/ui/snippet';
	import { Subheading } from '$lib/components/docs';

	type Props = {
		specifier: `${string}/${string}`;
	};

	let { specifier }: Props = $props();
</script>

<Subheading>Installation</Subheading>
<Snippet text="jsrepo add {specifier}" />
