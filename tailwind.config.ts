import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/images/background-stars.svg')",
      },
      colors: {
        'white': '#FFF',
        'black-russian': '#070724',
        'gray': '#38384F',
        'manatee': '#838391',
        'cerulean': '#419EBB',
        'sea-buckthorn': '#EDA249',
        'purple-heart': '#6D2ED5',
        'cinnabar': '#D83A34',
        'trinidad': '#CD5120',
        'light-sea-green': '#1EC1A2',
        'royal-blue': '#2D68F0',
      },
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'league-spartan': ['League Spartan', 'serif'],
      },
      fontSize: {
        'heading-1': '80px',
        'heading-2': '40px',
        'heading-3': '12px',
        'heading-4': '11px',
        'body': '14px',
      },
      fontWeight: {
        'antonio-medium': '400',
        'spartan-regular': '500',
        'spartan-bold': '700',
      },
      lineHeight: {
        'heading-1': '103px',
        'heading-2': '52px',
        'heading-3': '25px',
        'body': '25px',
      },
      spacing: {
        'heading-2': '-1.5em',
        'heading-3': '2.6em',
        'heading-4': '1em',
      }
    },
  },
  plugins: [],
}
export default config
