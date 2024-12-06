<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { FieldSet } from '$lib/components/ui/field-set';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<div class="w-full p-6">
	<FieldSet variant="destructive">
		<div>
			<Label>Project Name</Label>
			<Input value="ieedan/std" class="max-w-[225px]" />
		</div>
		{#snippet footer()}
			<div class="flex w-full place-items-center justify-between">
				<span class="text-sm text-muted-foreground">Rename your project.</span>
				<Button variant="destructive">Rename</Button>
			</div>
		{/snippet}
	</FieldSet>
</div>
