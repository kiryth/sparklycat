export const viewport = $state({
    vh: 0,
    vw: 0,
    scrollY: 0,
    scrollX: 0,
});

export const bannerMessage = 'Free U.S. Shipping on Orders $99+'

export const navItems = [
    {
        name: 'Product',
        path: '/',
    },
    {
        name: 'Shop',
        path: '/shop',
        dropdown: [
            { 
                name: 'Shop All',
                path: '/shop',
            },
            { 
                name: 'News',
                path: '/company/news',
            },
            { 
                name: 'Careers',
                path: '/company/careers',
            },
        ]
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];