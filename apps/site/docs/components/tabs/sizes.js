import { useState } from 'react';
import { Tabs } from "@rhino-ui/components/src/components/tabs/tabs";
import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Sizes() {
    const [firstSelectedTab, setFirstSelectedTab] = useState(0);
      const [secondSelectedTab, setSecondSelectedTab] = useState(0);
      return (
        <Box gap="md">
          <Tabs
            value={firstSelectedTab}
            onChange={(event, index) => {
              setFirstSelectedTab(index);
            }}
            size="md"
          >
            <Tabs.Item>Tab 1</Tabs.Item>
            <Tabs.Item>Tab 2</Tabs.Item>
          </Tabs>
          <Tabs
            value={secondSelectedTab}
            onChange={(event, index) => {
              setSecondSelectedTab(index);
            }}
            size="sm"
          >
            <Tabs.Item>Tab 1</Tabs.Item>
            <Tabs.Item>Tab 2</Tabs.Item>
          </Tabs>
        </Box>
      );
}