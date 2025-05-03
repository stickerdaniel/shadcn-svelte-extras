<script lang="ts">
	import { NLPDateInput } from '$lib/components/ui/nlp-date-input';
	import { toast } from 'svelte-sonner';

	const DAY = 24 * 60 * 60 * 1000;
</script>

<div class="h-72 w-full py-6">
	<NLPDateInput
		placeholder="E.g. &quot;this evening&quot; or &quot;2 hours from now&quot;"
		min={new Date()}
		max={new Date(Date.now() + DAY)}
		onChoice={({ date, label }) =>
			toast.success(label, {
				description: `${date.toDateString()} ${date.toLocaleTimeString()}`
			})}
	/>
</div>
