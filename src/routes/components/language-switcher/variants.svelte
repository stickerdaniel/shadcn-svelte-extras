<script lang="ts">
	import { LanguageSwitcher } from '$lib/components/ui/language-switcher';

	// Sample languages with flags
	const languages = [
		{ code: 'en', label: 'English' },
		{ code: 'de', label: 'Deutsch' },
		{ code: 'fr', label: 'Français' }
	];

	let value = 'en';
</script>

<LanguageSwitcher {languages} {value} variant="ghost" onChange={(code) => (value = code)} />
