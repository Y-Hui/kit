import type { Config } from 'tailwindcss'

const sizes = Object.fromEntries(
  Array.from({ length: 1000 }, (_, index) => [index, `${index}px`]),
)

export default {
  content: [],
  theme: {
    extend: {
      fontSize: sizes,
      space: sizes,
      borderRadius: sizes,
      padding: sizes,
      margin: sizes,
      zIndex: Object.fromEntries(
        Array.from({ length: 20 }, (_, index) => [index, `${index}px`]),
      ),
    },
  },
  plugins: [],
} satisfies Config
