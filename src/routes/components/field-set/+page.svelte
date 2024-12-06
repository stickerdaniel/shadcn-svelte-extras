<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
    import { FieldSet } from '$lib/components/ui/field-set';
	import { Code } from '$lib/components/ui/code-block';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';

</script>

<Playground>
    <FieldSet>
        <div>
            <Label>Username</Label>
            <Input value="ieedan" class="max-w-[225px]"/>
        </div>
        {#snippet footer()}
            <div class="flex place-items-center justify-between w-full">
                <span class="text-muted-foreground text-sm">Save your username.</span>
                <Button>
                    Save
                </Button>
            </div>
        {/snippet}
    </FieldSet>
</Playground>
<Code
	lang="svelte"
	code={`<FieldSet>
    <div>
        <Label>Username</Label>
        <Input value="ieedan" class="max-w-[225px]"/>
    </div>
    {#snippet footer()}
        <div class="flex place-items-center justify-between w-full">
            <span class="text-muted-foreground text-sm">Save your username.</span>
            <Button>
                Save
            </Button>
        </div>
    {/snippet}
</FieldSet>`}
/>
