<script lang="ts">
	import * as Terminal from '$lib/components/ui/terminal';
</script>

<Terminal.Root class="m-6 max-w-xl" delay={250}>
	<Terminal.TypingAnimation>&gt; jsrepo add ui/terminal</Terminal.TypingAnimation>

	<Terminal.AnimatedSpan delay={1500} class="text-green-500">
		<span>✔ Fetched manifest.</span>
	</Terminal.AnimatedSpan>

	<Terminal.AnimatedSpan delay={2000} class="text-green-500">
		<span>✔ Retrieved blocks from github/ieedan/shadcn-svelte-extras</span>
	</Terminal.AnimatedSpan>

	<Terminal.AnimatedSpan delay={2500} class="text-green-500">
		<span>✔ Added ui/terminal</span>
	</Terminal.AnimatedSpan>

	<Terminal.AnimatedSpan delay={3000} class="text-green-500">
		<span>✔ All done.</span>
	</Terminal.AnimatedSpan>
</Terminal.Root>
