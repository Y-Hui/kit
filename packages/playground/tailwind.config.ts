import preset from '@kit/tailwindcss'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
