<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
</script>

<Subheading>Basic</Subheading>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<Subheading>Default Country</Subheading>
<Installation specifier="ui/phone-input" />
<Playground code={examples.defaultCountry.code}>
	<examples.defaultCountry.Component />
</Playground>
<Subheading>Default Value</Subheading>
<Playground code={examples.defaultValue.code}>
	<examples.defaultValue.Component />
</Playground>
<Subheading>Custom Country Ordering</Subheading>
<Playground code={examples.customOrdering.code}>
	<examples.customOrdering.Component />
</Playground>
