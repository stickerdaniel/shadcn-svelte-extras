export type Route = {
    name: string;
    href: string;
}

const map: Record<string, Route[]> = {
    "Getting Started": [
        {
            name: "Introduction",
            href: "/",
        }
    ],
    "Components": [
        {
            name: "Button",
            href: "/components/button"
        },
        {
            name: "Field Set",
            href: "/components/field-set"
        },
        {
            name: "IPv4Address Input",
            href: "/components/ipv4address-input"
        },
        {
            name: "Light Switch",
            href: "/components/light-switch"
        },
        {
            name: "Modal",
            href: "/components/modal"
        },
        {
            name: "Theme Selector",
            href: "/components/theme-selector"
        },
    ]
};

export { map }