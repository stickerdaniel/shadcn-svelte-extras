<script lang="ts">
	import { Kbd } from '$lib/components/ui/kbd';
</script>

<div class="flex flex-col gap-4">
	<div class="flex place-items-end gap-2">
		<Kbd size="sm" variant="outline">A</Kbd>
		<Kbd variant="outline">B</Kbd>
		<Kbd size="lg" variant="outline">C</Kbd>
	</div>
	<div class="flex place-items-end gap-2">
		<Kbd size="sm" variant="primary">A</Kbd>
		<Kbd variant="primary">B</Kbd>
		<Kbd size="lg" variant="primary">C</Kbd>
	</div>
	<div class="flex place-items-end gap-2">
		<Kbd size="sm" variant="secondary">A</Kbd>
		<Kbd variant="secondary">B</Kbd>
		<Kbd size="lg" variant="secondary">C</Kbd>
	</div>
</div>
