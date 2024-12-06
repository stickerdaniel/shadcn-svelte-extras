export type Route = {
    name: string;
    description: string;
    href: string;
}

const map: Record<string, Route[]> = {
    "Getting Started": [
        {
            name: "Introduction",
            description: "Introduction to shadcn-svelte-extras.",
            href: "/",
        }
    ],
    "Components": [
        {
            name: "Button",
            description: "An extended button component.",
            href: "/components/button"
        },
        {
            name: "Field Set",
            description: "A field set component.",
            href: "/components/field-set"
        },
        {
            name: "IPv4Address Input",
            description: "An ip address component.",
            href: "/components/ipv4address-input"
        },
        {
            name: "Light Switch",
            description: "A light switch component.",
            href: "/components/light-switch"
        },
        {
            name: "Modal",
            description: "A responsive dialog component.",
            href: "/components/modal"
        },
        {
            name: "Theme Selector",
            description: "A theme selector component.",
            href: "/components/theme-selector"
        },
    ]
};

export { map }