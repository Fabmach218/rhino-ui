import { useState } from 'react';
import { Tabs } from "@rhino-ui/components/src/components/tabs/tabs";

export default function Overflow() {
    const [selectedTab, setSelectedTab] = useState(8);
      const tabs = [...new Array(10)];
      return (
        <>
          <Tabs
            value={selectedTab}
            onChange={(event, index) => {
              setSelectedTab(index);
            }}
            isCentered
          >
            {tabs.map((tab, index) => (
              <Tabs.Item key={index}>{`Overflowing Tab ${
                index + 1
              }`}</Tabs.Item>
            ))}
          </Tabs>
        </>
      );
}