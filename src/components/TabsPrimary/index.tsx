import { 
  Container, 
  TabsRoot, 
  TabList,
  TabsTrigger,
  TabsContent
} from './styles';

export function TabsPrimary() {
  return (
    <Container>
      <TabsRoot defaultValue='tab1'>
        <TabList>
          <TabsTrigger value="tab1">One</TabsTrigger>
          <TabsTrigger value="tab2">Two</TabsTrigger>
          <TabsTrigger value="tab3">Three</TabsTrigger>
        </TabList>
        <TabsContent value="tab1">Tab one content</TabsContent>
        <TabsContent value="tab2">Tab two content</TabsContent>
        <TabsContent value="tab3">Tab three content</TabsContent>
      </TabsRoot>
    </Container>
  );
}