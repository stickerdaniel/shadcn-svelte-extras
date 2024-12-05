<script lang="ts">
	import { FieldSet } from "$lib/components/ui/field-set";
</script>

<main class="h-svh flex place-items-center justify-center">
	<FieldSet class="max-w-2xl" variant="default">
		{#snippet content()}
			Hello
		{/snippet}
		{#snippet footer()}
			Footer
		{/snippet}
	</FieldSet>
</main>