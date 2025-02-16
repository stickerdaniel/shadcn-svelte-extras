<script lang="ts">
	import * as Terminal from '$lib/components/ui/terminal';
</script>

<Terminal.Root class="m-6 max-w-xl" delay={250}>
	<Terminal.TypingAnimation>&gt; jsrepo add ui/terminal</Terminal.TypingAnimation>

	<Terminal.Loading
		delay={1500}
		class="text-blue-400 data-[completed]:text-green-500"
		loadingMessage="Fetching manifest"
		completeMessage="Retrieved blocks from github/ieedan/shadcn-svelte-extras"
	/>

	<Terminal.Loading
		delay={2750}
		class="text-blue-400 data-[completed]:text-green-500"
		loadingMessage="Adding ui/terminal"
		completeMessage="Added ui/terminal"
	/>

	<Terminal.Loading
		delay={4000}
		class="text-blue-400 data-[completed]:text-green-500"
		loadingMessage="Installing dependencies"
		completeMessage="Installed runed@^0.23.4"
	/>

	<Terminal.AnimatedSpan delay={5250} class="text-green-500">
		<span>✔ All done.</span>
	</Terminal.AnimatedSpan>
</Terminal.Root>
