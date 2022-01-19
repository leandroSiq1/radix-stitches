import * as Accordion from '@radix-ui/react-accordion';
import { styled } from '../../styles/styled';

export const Container = styled('div', {
  width: '500px',
  height: '100vh',

  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
});

export const AccordionRoot = styled(Accordion.Root, {
  width: '500px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
});

export const AccordionTrigger = styled(Accordion.Trigger, {
  width: '100%',
  height: '50px',
  padding: '0 16px',

  borderRadius: '8px',
  background: '#8257e5',

  fontSize: '16px',
  color: '#FFF',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    color: {
      violet: {
        color: '#8257e5',
      },
      red: {
        color: 'red'
      }
    }
  }
});