export interface Language {
    code: string;     // Language code (e.g., 'en', 'de')
    label: string;    // Display name (e.g., 'English', 'Deutsch')
    flag?: string;    // Optional flag emoji or path to flag icon
  }
  
  export interface LanguageSwitcherProps {
    /** List of available languages */
    languages: Language[];
    
    /** Current selected language code */
    value?: string;
    
    /** Display variant */
    variant?: 'dropdown' | 'buttons';
    
    /** Dropdown alignment */
    align?: 'start' | 'center' | 'end';
    
    /** Button size */
    size?: 'default' | 'sm' | 'lg' | 'icon';
    
    /** Button variant */
    buttonVariant?: 'default' | 'outline' | 'ghost' | 'secondary';
    
    /** Called when the language changes */
    onChange?: (code: string) => void;
    
    /** CSS class name */
    class?: string;
  }