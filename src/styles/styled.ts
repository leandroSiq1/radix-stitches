import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, css, keyframes } =createStitches({
  theme: {},
  media: {
    bp1: '(max-width: 640px)',
  },
  utils: {
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    })
  },
  prefix: '',
});