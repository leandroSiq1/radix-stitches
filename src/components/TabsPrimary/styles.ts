import * as Tabs from '@radix-ui/react-tabs';
import { styled } from '../../styles/styled';

export const Container = styled('div', {
  width: '400px',

  margin: '20px auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TabsRoot = styled(Tabs.Root, {
  width: '500px',
  background: '#212121',
  borderRadius: '8px',
  padding: '3rem 2rem',
});

export const TabList = styled(Tabs.List, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});

export const TabsTrigger = styled(Tabs.Trigger, {
  padding: '8px 24px',

  border: 0,
  borderRadius: '8px',
  background: '#8257e5',
  
  fontSize: '16px',
  color: '#FFF',
});

export const TabsContent = styled(Tabs.Content, {
  width: '100%',
  height: '100%',
  
  my: '20px',
});