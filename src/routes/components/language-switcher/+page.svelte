<script lang="ts">
    import { Subheading } from '$lib/components/docs';
    import Installation from '$lib/components/installation.svelte';
    import Playground from '$lib/components/playground.svelte';
    import { LanguageSwitcher } from '$lib/components/ui/language-switcher';
    
    const exampleCode = `<script lang="ts">
    import { LanguageSwitcher } from '$lib/components/ui/language-switcher';
    
    // Sample languages
    const languages = [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
      { code: 'fr', label: 'Français' }
    ];
    
    let currentLang = 'en';
  <\/script>
  
  <LanguageSwitcher 
    languages={languages}
    value={currentLang}
    onChange={(code) => currentLang = code}
  />`;
  
    // Sample languages for the examples
    const languages = [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
      { code: 'fr', label: 'Français' }
    ];
    
    let currentLang = 'en';
  </script>
  
  <Subheading class="mt-0">Basic</Subheading>
  
  <Playground code={exampleCode}>
    <LanguageSwitcher 
      languages={languages}
      value={currentLang}
      onChange={(code) => currentLang = code}
    />
  </Playground>
  
  <Installation specifier="ui/language-switcher" />

  <Subheading class="mt-0">Ghost</Subheading>
  
  <Playground code={exampleCode}>
    <LanguageSwitcher 
      languages={languages}
      value={currentLang}
      onChange={(code) => currentLang = code}
    />
  </Playground>