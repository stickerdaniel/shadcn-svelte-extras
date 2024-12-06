<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code-block';
	import { Label } from '$lib/components/ui/label';
	import { IPv4AddressInput } from '$lib/components/ui/ipv4address-input';
</script>

<Playground>
	<div>
        <Label>IP Address</Label>
        <IPv4AddressInput value={[192, 168, 1, 1]} />
    </div>
</Playground>
<Code lang="svelte" code={`<div>
    <Label>IP Address</Label>
    <IPv4AddressInput value={[192, 168, 1, 1]} />
</div>`} />
