import { Box } from '@rhino-ui/components/src/components/box/box';
import { TabsSlider } from '@rhino-ui/components/src/components/tabs-slider/tabs-slider';
import { useState } from 'react';

export default function Sizes() {
    const [sm, setSm] = useState(0);
      const [md, setMd] = useState(0);
      const [lg, setLg] = useState(0);
      const [responsive, setResponsive] = useState(0);
      return (
        <Box gap="md">
          <TabsSlider
            value={sm}
            onChange={(event, index) => {
              setSm(index);
            }}
            size="sm"
          >
            <TabsSlider.Item>Tab 1</TabsSlider.Item>
            <TabsSlider.Item>Tab 2</TabsSlider.Item>
            <TabsSlider.Item>Tab 3</TabsSlider.Item>
            <TabsSlider.Item>Tab 4</TabsSlider.Item>
          </TabsSlider>
          <TabsSlider
            value={md}
            onChange={(event, index) => {
              setMd(index);
            }}
            size="md"
          >
            <TabsSlider.Item>Tab 1</TabsSlider.Item>
            <TabsSlider.Item>Tab 2</TabsSlider.Item>
            <TabsSlider.Item>Tab 3</TabsSlider.Item>
            <TabsSlider.Item>Tab 4</TabsSlider.Item>
          </TabsSlider>
          <TabsSlider
            value={lg}
            onChange={(event, index) => {
              setLg(index);
            }}
            size="lg"
          >
            <TabsSlider.Item>Tab 1</TabsSlider.Item>
            <TabsSlider.Item>Tab 2</TabsSlider.Item>
            <TabsSlider.Item>Tab 3</TabsSlider.Item>
            <TabsSlider.Item>Tab 4</TabsSlider.Item>
          </TabsSlider>
          <Box>
            This one is responsive. Change your screen size to see it in action.
          </Box>
          <TabsSlider
            value={responsive}
            onChange={(event, index) => {
              setResponsive(index);
            }}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg' }}
          >
            <TabsSlider.Item>Tab 1</TabsSlider.Item>
            <TabsSlider.Item>Tab 2</TabsSlider.Item>
            <TabsSlider.Item>Tab 3</TabsSlider.Item>
            <TabsSlider.Item>Tab 4</TabsSlider.Item>
          </TabsSlider>
        </Box>
      );
}