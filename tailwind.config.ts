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
        'mercury': '#419EBB',
        'venus': '#EDA249',
        'earth': '#6D2ED5',
        'mars': '#D14C32',
        'jupiter': '#D83A34',
        'saturn': '#CD5120',
        'uranus': '#1EC1A2',
        'neptune': '#2D68F0',
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
      maxHeight: {
        'mercury': '111px',
        'md-mercury': '184px',
        'lg-mercury': '290px',
        'venus': '154px',
        'md-venus': '254px',
        'lg-venus': '400px',
        'earth': '173px',
        'md-earth': '285px',
        'lg-earth': '450px',
        'mars': '129px',
        'md-mars': '213px',
        'lg-mars': '336px',
        'jupiter': '224px',
        'md-jupiter': '369px',
        'lg-jupiter': '582px',
        'saturn': '256px',
        'md-saturn': '422px',
        'lg-saturn': '666px',
        'uranus': '176px',
        'md-uranus': '290px',
        'lg-uranus': '458px',
        'neptune': '173px',
        'md-neptune': '285px',
        'lg-neptune': '450px',
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
