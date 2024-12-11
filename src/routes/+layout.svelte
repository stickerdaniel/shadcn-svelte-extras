<script lang="ts">
	import '@fontsource/geist-mono';
	import '@fontsource/inter';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { map, type Route } from '$lib/map';
	import { page } from '$app/stores';
	import { checkIsActive } from '$lib/actions/active.svelte';
	import { ShikiProvider } from '$lib/components/ui/code';
	import PageWrapper from '$lib/components/page-wrapper.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Icons from '$lib/components/icons';
	import { ThemeSelector } from '$lib/components/ui/theme-selector';
	import { Toaster } from "$lib/components/ui/sonner/index.js"

	let { children } = $props();

	const getCurrentDoc = (
		url: URL
	): { group: string; doc: Route; next?: Route; prev?: Route } | undefined => {
		const docs = Object.entries(map).flatMap(([group, routes]) =>
			routes.map((r) => ({ group, ...r }))
		);

		for (let i = 0; i < docs.length; i++) {
			const doc = docs[i];

			const isActive = checkIsActive(new URL(doc.href, url.origin).toString(), {
				activeForSubdirectories: false,
				url
			});

			if (isActive) return { group: doc.group, doc: doc, prev: docs[i - 1], next: docs[i + 1] };
		}
	};

	const currentDoc = $derived(getCurrentDoc($page.url));
</script>

<ModeWatcher />
<Toaster/>
<ShikiProvider>
	<Sidebar.Provider>
		<AppSidebar />
		<Sidebar.Inset class="relative max-w-full">
			<header class="flex h-16 place-items-center justify-between border-b border-border pl-2 pr-6">
				<div>
					<Sidebar.Trigger class="md:hidden" />
				</div>
				<div class="flex place-items-center gap-1">
					<Button variant="ghost" size="icon">
						<Icons.GitHub class="size-4" />
					</Button>
					<ThemeSelector variant="ghost" />
				</div>
			</header>
			<PageWrapper doc={currentDoc}>
				{@render children()}
			</PageWrapper>
		</Sidebar.Inset>
	</Sidebar.Provider>
</ShikiProvider>
