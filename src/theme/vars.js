export const BREAKPOINTS = {
    xs: 0,
    xm: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
};

export const COLORS = {
    primary: {
        50: '#EAEDFF',
        100: '#BFC8FF',
        200: '#A0AEFF',
        300: '#7489FE',
        400: '#5972FE',
        500: '#304FFE',
        600: '#2C48E7',
        700: '#2238B4',
        800: '#1A2B8C',
        900: '#14216B',
        get DEFAULT() {
            return this[500];
        },
    },
    secondary: {
        50: '#F0EBFC',
        100: '#C4B1F1',
        200: '#784DD0',
        300: '#643BB5',
        400: '#4D2F82',
        500: '#2C1457',
        get DEFAULT() {
            return this[500];
        },
    },
    neutral: {
        50: '#EBECEE',
        100: '#C1C4C9',
        150: '#A3A8AF',
        200: '#A3A8AF',
        250: '#515A69',
        300: '#79808A',
        350: '#2B3544',
        400: '#5F6774',
        500: '#374151',
        600: '#323B4A',
        700: '#272E3A',
        800: '#1E242D',
        900: '#171B22',
        white: '#FFFFFF',
        black: '#000000',
        get DEFAULT() {
            return this[500];
        },
    },
    green: {
        50: '#e6faeb',
        100: '#b0efc0',
        200: '#8ae8a2',
        300: '#54dd78',
        400: '#33d65d',
        500: '#00cc35',
        600: '#00ba30',
        700: '#009126',
        800: '#00701d',
        900: '#005616',
        get DEFAULT() {
            return this[500];
        },
    },
    yellow: {
        50: '#fef5e7',
        100: '#fce1b3',
        200: '#fad28f',
        300: '#f8be5c',
        400: '#f7b13c',
        500: '#f59e0b',
        600: '#df900a',
        700: '#ae7008',
        800: '#875706',
        900: '#674205',
        get DEFAULT() {
            return this[500];
        },
    },
    red: {
        50: '#fce9e9',
        100: '#f4bcbc',
        200: '#ef9b9b',
        300: '#e86e6e',
        400: '#e35151',
        500: '#dc2626',
        600: '#c82323',
        700: '#9c1b1b',
        800: '#791515',
        900: '#5c1010',
        get DEFAULT() {
            return this[500];
        },
    },
};
export const LINE_HEIGHT = {
    xs: '12px',
    sm: '16px',
    base: '20px',
    lg: '24px',
    xl: '28px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '40px',
    '6xl': '64px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
    '10xl': '160px',
};
export const FONT_SIZE = {
    xs: '10px',
    sm: '12px',
    base: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '30px',
    '5xl': '36px',
    '6xl': '48px',
    '7xl': '60px',
    '8xl': '72px',
    '9xl': '96px',
    '10xl': '128px',
};
export const FONT_FAMILY = {
    sans: ['var(--font-inter)'],
    'pwa-default': ['var(--font-pwa-default_font)', 'var(--font-inter)'],
    'pwa-heading': ['var(--font-pwa-heading_font)', 'var(--font-inter)'],
};
export const SPACING = {
    'space-2': '2px',
    'space-4': '4px',
    'space-6': '6px',
    'space-8': '8px',
    'space-12': '12px',
    'space-16': '16px',
    'space-20': '20px',
    'space-24': '24px',
    'space-32': '32px',
    'space-40': '40px',
    'space-48': '48px',
    'space-64': '64px',
    'space-80': '80px',
    'space-96': '96px',
    'space-128': '128px',
};

export const ZINDEX = {
    'backdrop-loader': 1300,
    'scroll-to-top': 1099,
    toast: 1202,
    'backdrop-dialog': 1200,
    dialog: 1201,
    'backdrop-drawer': 1150,
    drawer: 1151,
};

export default {};