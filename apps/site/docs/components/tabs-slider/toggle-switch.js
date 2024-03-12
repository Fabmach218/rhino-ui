import { Box } from '@rhino-ui/components/src/components/box/box';
import { TabPanels } from '@rhino-ui/components/src/components/tab-panels/tab-panels';
import { TabsSlider } from '@rhino-ui/components/src/components/tabs-slider/tabs-slider';
import { useState } from 'react';

export default function ToggleSwitch() {
    const [selectedTab, setSelectedTab] = useState(0);
      return (
        <>
          <Box maxWidth="150px">
            <TabsSlider
              value={selectedTab}
              onChange={(event, index) => {
                setSelectedTab(index);
              }}
              size="sm"
            >
              <TabsSlider.Item>Tab 1</TabsSlider.Item>
              <TabsSlider.Item>Tab 2</TabsSlider.Item>
            </TabsSlider>
          </Box>
          <TabPanels value={selectedTab}>
            <Box padding="lg">Here's the first tab</Box>
            <Box padding="lg">Here's the second tab</Box>
          </TabPanels>
        </>
      );
}