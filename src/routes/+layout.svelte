<script lang="ts">
	import '@fontsource/geist-mono';
	import '@fontsource/geist-sans';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { map, type Route } from '$lib/map';
	import { page } from '$app/stores';
	import { checkIsActive } from '$lib/utils/is-active';
	import { shiki } from '$lib/components/ui/code';
	import PageWrapper from '$lib/components/page-wrapper.svelte';

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
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			{#if currentDoc}
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							{currentDoc.group}
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>{currentDoc.doc.name}</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			{/if}
		</header>
		<PageWrapper route={currentDoc.doc}>
			{@render children()}
		</PageWrapper>
	</Sidebar.Inset>
</Sidebar.Provider>
