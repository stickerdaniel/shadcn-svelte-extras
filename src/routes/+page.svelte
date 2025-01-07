<script lang="ts">
	import {
		LoginForm,
		ConfigureDevice,
		PhoneNumberSetting,
		CodeBlock,
		EditorFileTree
	} from '$lib/components/docs/examples';
	import ShadcnSvelteExtras from '$lib/components/shadcn-svelte-extras.svelte';
	import { Snippet } from '$lib/components/ui/snippet';
	import SearchButton from '$lib/components/search-button.svelte';
	import ChatExample from './components/chat/basic.svelte';
</script>

<p>
	<ShadcnSvelteExtras /> provides you with the rest of the components you need to finish your application.
</p>
<div class="grid grid-cols-1 gap-4 rounded-lg border p-6 lg:grid-cols-2">
	<div class="flex flex-col gap-4 lg:col-start-1">
		<LoginForm />
		<CodeBlock />
		<SearchButton />
		<ChatExample />
	</div>
	<div class="flex flex-col gap-4 lg:col-start-2">
		<PhoneNumberSetting />
		<Snippet text="npx shadcn-svelte@next init" />
		<ConfigureDevice />
		<EditorFileTree />
	</div>
</div>
