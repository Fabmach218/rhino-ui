import { Box } from '@rhino-ui/components/src/components/box/box';
import { TabPanels } from '@rhino-ui/components/src/components/tab-panels/tab-panels';
import { TabsSlider } from '@rhino-ui/components/src/components/tabs-slider/tabs-slider';
import { useState } from 'react';

export default function AnchorElements() {
    const [selectedTab, setSelectedTab] = useState(0);
      const handleClick = event => {
        event.preventDefault();
      };
      return (
        <Box gap="md">
          <TabsSlider
            value={selectedTab}
            onChange={(event, index) => {
              setSelectedTab(index);
            }}
          >
            <TabsSlider.Item
              as="a"
              href="#firstPanel"
              id="tabOneAnchor"
              aria-controls="firstPanel"
              style={{ textDecoration: 'none' }}
              onClick={handleClick}
            >
              Tab 1
            </TabsSlider.Item>
            <TabsSlider.Item
              as="a"
              href="#secondPanel"
              id="tabTwoAnchor"
              aria-controls="secondPanel"
              style={{ textDecoration: 'none' }}
              onClick={handleClick}
            >
              Tab 2
            </TabsSlider.Item>
          </TabsSlider>
          <TabPanels value={selectedTab}>
            <Box padding="lg" id="firstPanel" aria-labelledby="tabOneAnchor">
              Here's the first tab
            </Box>
            <Box padding="lg" id="secondPanel" aria-labelledby="tabTwoAnchor">
              Here's the second tab
            </Box>
          </TabPanels>
        </Box>
      );
}