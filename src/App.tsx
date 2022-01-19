import React from 'react';
import { TabsPrimary } from './components/TabsPrimary';
import { AccordionPrimary } from './components/AccordionPrimary';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <React.Fragment>
      <TabsPrimary />
      <AccordionPrimary />
      {GlobalStyles()}
    </React.Fragment>
  );
}