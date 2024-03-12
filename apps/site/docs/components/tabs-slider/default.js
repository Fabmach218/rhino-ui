import { TabsSlider } from '@rhino-ui/components/src/components/tabs-slider/tabs-slider';
import { useState } from 'react';

export default function Default() {
    const [selectedTab, setSelectedTab] = useState(0);
      return (
        <TabsSlider
          value={selectedTab}
          onChange={(event, index) => {
            setSelectedTab(index);
          }}
        >
          <TabsSlider.Item>Tab 1</TabsSlider.Item>
          <TabsSlider.Item>Tab 2</TabsSlider.Item>
          <TabsSlider.Item>Tab 3</TabsSlider.Item>
          <TabsSlider.Item isDisabled>Disabled</TabsSlider.Item>
        </TabsSlider>
      );
}