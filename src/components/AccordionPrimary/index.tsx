
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { styled, keyframes } from '../../styles/styled';
import { Container, AccordionRoot, AccordionTrigger } from './styles';

const AccordionChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const AccordionHeader = styled(Accordion.Header, {
  width: '100%',
  margin: 0,
});

const AccordionContent = styled(Accordion.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});

export function AccordionPrimary() {
  return (
    <Container>
      <AccordionRoot type='multiple' >
        <Accordion.Item value='item-1'>
          <AccordionHeader>
            <AccordionTrigger color={{ "@bp1": 'red' }}>
              <p>Item 1</p>
              <AccordionChevron aria-hidden />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <h1>Hello World Item 1</h1>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item value='item-2'>
          <AccordionHeader>
            <AccordionTrigger>
              <p>Item 2</p>
              <AccordionChevron aria-hidden />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <h1>Hello World Item 2</h1>
          </AccordionContent>
        </Accordion.Item>
      </AccordionRoot>
    </Container>
  );
}