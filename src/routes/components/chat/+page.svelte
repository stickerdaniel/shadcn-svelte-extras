<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { examples } from './examples';
</script>

<Subheading class="mt-0">Basic</Subheading>
<Playground code={examples.basic.code} class="min-h-[700px]">
	<examples.basic.Component />
</Playground>
<Installation specifier="ui/chat" />
<Subheading>Usage</Subheading>
<Code
	lang="svelte"
	code={`\<script lang="ts"\>
	import * as Chat from "$lib/components/ui/chat";
\<\/script\>

<Chat.List>
	<Chat.Bubble>
		<Chat.BubbleAvatar>
			<Chat.BubbleAvatarImage 
				src="https://github.com/shadcn.png" 
				alt="@shadcn" 
			/>
			<Chat.BubbleAvatarFallback>
				CN
			</Chat.BubbleAvatarFallback>
		</Chat.BubbleAvatar>
		<Chat.BubbleMessage>
			Hello, World!
		</Chat.BubbleMessage>
	</Chat.Bubble>
</Chat.List>`}
/>
