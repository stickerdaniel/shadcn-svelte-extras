<script lang="ts">
	import {
		LoginForm,
		ConfigureDevice,
		PhoneNumberSetting,
		CodeBlock,
		EditorFileTree,
		FileDropZone,
		Terminal
	} from '$lib/components/docs/examples';
	import { Snippet } from '$lib/components/ui/snippet';
	import SearchButton from '$lib/components/search-button.svelte';
	import ChatExample from './components/chat/basic.svelte';
	import { TagsInput } from '$lib/components/ui/tags-input';
	import { LucideArrowRight, TerminalIcon } from 'lucide-svelte';

	let tags = $state(['shadcn-svelte', 'extras']);
</script>

<div class="flex flex-col gap-8 p-8">
	<div class="flex flex-col gap-2">
		<a href="/components/terminal" class="flex place-items-center gap-1 text-sm font-medium">
			<TerminalIcon class="size-4" />
			<span class="hover:underline">{'jsrepo add ui/terminal'}</span>
			<LucideArrowRight class="size-4" />
		</a>
		<h1 class="text-5xl font-bold">shadcn-svelte-extras</h1>
		<p class="text-lg text-muted-foreground">Finish your app.</p>
	</div>
	<div class="grid grid-cols-1 gap-4 rounded-lg border p-6 lg:grid-cols-2 2xl:grid-cols-3">
		<div class="flex flex-col gap-4 lg:col-start-1">
			<ChatExample />
			<TagsInput bind:value={tags} placeholder="Add a tag" />
			<LoginForm />
			<SearchButton />
		</div>
		<div class="flex flex-col gap-4 lg:col-start-2">
			<PhoneNumberSetting />
			<CodeBlock />
			<ConfigureDevice />
			<Snippet text="npx shadcn-svelte@next init" />
			<FileDropZone/>
		</div>
		<div class="flex flex-col gap-4 xl:col-start-3">
			<Terminal/>
			<EditorFileTree />
		</div>
	</div>
</div>
