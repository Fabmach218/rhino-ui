import { useState } from 'react';
import { Tabs } from "@rhino-ui/components/src/components/tabs/tabs";

export default function Default() {
    const [selectedTab, setSelectedTab] = useState(0);
      return (
        <Tabs
          value={selectedTab}
          onChange={(event, index) => {
            setSelectedTab(index);
          }}
        >
          <Tabs.Item>Tab 1</Tabs.Item>
          <Tabs.Item>Tab 2</Tabs.Item>
          <Tabs.Item>Tab 3</Tabs.Item>
          <Tabs.Item isDisabled>Disabled</Tabs.Item>
        </Tabs>
      );
}