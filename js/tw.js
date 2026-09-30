tailwind.config = {
  theme: {
    extend: {
      colors: {
        graphite: { 950: '#0A0E12', 900: '#101720', 850: '#151D27', 800: '#1B242F', 700: '#26313E', 600: '#35424F' },
        azure:    { 300: '#B3E3F7', 400: '#5FC8F0', 500: '#24A6DC', 600: '#157FB0' },
        navy:     { 500: '#157FB0' },
        signal:   { 500: '#D9941F' },
        chalk:    { 50: '#F4F8FB', 100: '#E5EDF3', 200: '#CDD9E2' },
        steel:    { 400: '#93A2AF', 500: '#72808C' },
        ink:      { 900: '#090D11' },
      },
      fontFamily: {
        display: ['"Saira Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: { content: '76rem' },
    },
  },
};
