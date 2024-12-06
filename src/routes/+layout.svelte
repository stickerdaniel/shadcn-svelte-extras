<script lang="ts">
	import '@fontsource/geist-mono';
	import '@fontsource/inter';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { map, type Route } from '$lib/map';
	import { page } from '$app/stores';
	import { checkIsActive } from '$lib/utils/is-active';
	import { shiki } from '$lib/components/ui/code';
	import PageWrapper from '$lib/components/page-wrapper.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Icons from '$lib/components/icons';
	import { ThemeSelector } from '$lib/components/ui/theme-selector';

	shiki();

	let { children } = $props();

	const getCurrentDoc = (url: URL): { group: string; doc: Route } | undefined => {
		for (const [group, routes] of Object.entries(map)) {
			for (const route of routes) {
				const isActive = checkIsActive(new URL(route.href, url.origin).toString(), {
					activeForSubdirectories: false,
					url
				});

				if (isActive) return { group, doc: route };
			}
		}
	};

	const currentDoc = $derived(getCurrentDoc($page.url));
</script>

<ModeWatcher />
<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
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
