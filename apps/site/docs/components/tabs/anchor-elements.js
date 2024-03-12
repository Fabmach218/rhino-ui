import { useState } from 'react';
import { TabPanels } from "@rhino-ui/components/src/components/tab-panels/tab-panels";
import { Tabs } from "@rhino-ui/components/src/components/tabs/tabs";
import { Box } from '@rhino-ui/components/src/components/box/box';

export default function AnchorElements() {
    const [selectedTab, setSelectedTab] = useState(0);
      const handleClick = event => {
        event.preventDefault();
      };
      return (
        <Box gap="md">
          <Tabs
            value={selectedTab}
            onChange={(event, index) => {
              setSelectedTab(index);
            }}
          >
            <Tabs.Item
              as="a"
              href="#firstPanel"
              id="tabOneAnchor"
              aria-controls="firstPanel"
              style={{ textDecoration: 'none' }}
              onClick={handleClick}
            >
              Tab 1
            </Tabs.Item>
            <Tabs.Item
              as="a"
              href="#secondPanel"
              id="tabTwoAnchor"
              aria-controls="secondPanel"
              style={{ textDecoration: 'none' }}
              onClick={handleClick}
            >
              Tab 2
            </Tabs.Item>
          </Tabs>
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