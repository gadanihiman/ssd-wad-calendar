import type { Config } from 'tailwindcss'

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'purple', 'pink', 'red', 'orange'];

const config: Config = {
  // content: [
  //   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  // ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  // plugins: [],
  purge: {
    // content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`),
    ],
  },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
