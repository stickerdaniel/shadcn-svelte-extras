<script lang="ts">
	import { LanguageSwitcher } from '$lib/components/ui/language-switcher';

	// These import lines are for demonstration - they won't work without Paraglide setup
	// import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	// import { i18n } from '$lib/i18n';
	// import { page } from '$app/stores';
	// import { goto } from '$app/navigation';

	// Example languages for Paraglide implementation
	const languages = [
		{ code: 'en', label: 'English' },
		{ code: 'de', label: 'Deutsch' },
		{ code: 'fr', label: 'Français' }
	];

	// This would be the actual code in a real implementation
	let currentLang = 'en'; // In real use: languageTag() || 'en'

	function handleLanguageChange(newLanguage) {
		// In a real implementation with Paraglide, this would look like:
		/*
      if (typeof window !== 'undefined') {
        const canonicalPath = i18n.route($page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
      }
      */

		// For demo purposes just update the local state
		currentLang = newLanguage;
	}
</script>

<LanguageSwitcher {languages} value={currentLang} onChange={handleLanguageChange} />
