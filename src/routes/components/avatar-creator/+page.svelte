<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
	import { Link } from '$lib/components/ui/link';
</script>

<Subheading class="mt-0">Basic</Subheading>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<Link
		href="https://notion-avatar.app/"
		target="_blank"
		rel="noopener noreferrer"
	>
		Notion Avatar Creator
	</Link>
<Installation specifier="ui/avatar-creator" />
