import { useState } from 'react';
import { TabPanels } from "@rhino-ui/components/src/components/tab-panels/tab-panels";
import { Tabs } from "@rhino-ui/components/src/components/tabs/tabs";
import { Box } from '@rhino-ui/components/src/components/box/box';

export default function WithPanels() {
    const [selectedTab, setSelectedTab] = useState(0);
      return (
        <>
          <Tabs
            value={selectedTab}
            onChange={(event, index) => {
              setSelectedTab(index);
            }}
          >
            <Tabs.Item>Tab 1</Tabs.Item>
            <Tabs.Item>Tab 2</Tabs.Item>
          </Tabs>
          <TabPanels value={selectedTab}>
            <Box padding="lg">Here's the first tab</Box>
            <Box padding="lg">Here's the second tab</Box>
          </TabPanels>
        </>
      );
}