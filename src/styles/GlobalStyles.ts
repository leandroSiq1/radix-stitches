import { globalCss } from '@stitches/react';

const Styles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  body: {
    background: '#141416',
    color: '#fff',
  },

  button: {
    cursor: 'pointer',
  },
});

export const GlobalStyles = () => {
  const css = Styles();
  return css;
};