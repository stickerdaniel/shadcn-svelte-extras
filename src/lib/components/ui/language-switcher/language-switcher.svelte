<script lang="ts">
    import { Globe } from '@lucide/svelte';
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
    import { Button, buttonVariants } from '$lib/components/ui/button';
    import { cn } from '$lib/utils/utils';
    import type { Language, LanguageSwitcherProps } from './types';
  
    let {
      languages = [],
      value = $bindable(''),
      variant = 'dropdown',
      align = 'end',
      size = 'icon',
      buttonVariant = 'outline',
      onChange,
      class: className
    }: LanguageSwitcherProps = $props();
    
    // Set default value if none provided
    $effect(() => {
      if (!value && languages.length > 0) {
        value = languages[0].code;
      }
    });
    
    // Call onChange when value changes
    $effect(() => {
      if (onChange && value) {
        onChange(value);
      }
    });
    
    // Get current selected language
    const selectedLanguage = $derived(
      languages.find(lang => lang.code === value) || languages[0]
    );
  </script>
  
  {#if variant === 'dropdown'}
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        class={cn(buttonVariants({ variant: buttonVariant, size }), className)}
        aria-label="Change language"
      >
        <Globe class="size-4" />
        <span class="sr-only">Change language</span>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Content {align}>
        <DropdownMenu.RadioGroup bind:value>
          {#each languages as language (language.code)}
            <DropdownMenu.RadioItem value={language.code}>
              <div class="flex items-center gap-2">
                {#if language.flag}<span>{language.flag}</span>{/if}
                {language.label}
              </div>
            </DropdownMenu.RadioItem>
          {/each}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  {:else if variant === 'buttons'}
    <div class={cn("flex gap-1", className)}>
      {#each languages as language (language.code)}
        <Button 
          variant={value === language.code ? buttonVariant : 'ghost'} 
          {size}
          onclick={() => value = language.code}
          aria-pressed={value === language.code}
          class={value === language.code ? 'font-bold' : ''}
        >
          {#if language.flag}<span class="mr-1">{language.flag}</span>{/if}
          {language.label}
        </Button>
      {/each}
    </div>
  {/if}