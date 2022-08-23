import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Open Sans'],
        serif: ['Roboto Slab'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    // ...
    breakpoints: {
      sm: '375px',
      md: '768px',
    },
  },
  rules: [
    ['container', ({ theme }) => {
      return `
        max-width: ${theme.breakpoints.md};

        @media (min-width: ${theme.breakpoints.sm}) {
          .container {
            max-width: ${theme.breakpoints.sm};
          }
        }
      `
    }],
  ]
});
