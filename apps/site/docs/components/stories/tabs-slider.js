import { Box } from '@rhino-ui/components/src/components/box/box';
import { TabPanels } from '@rhino-ui/components/src/components/tab-panels/tab-panels';
import { TabsSlider } from '@rhino-ui/components/src/components/tabs-slider/tabs-slider';
import { useState } from 'react';

export function Default() {
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

export function Sizes() {
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

export function ToggleSwitch() {
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

export function AnchorElements() {
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

export function DesignTokens() {
    const tokens = {
        '--tabs-slider-font-family': '--button-font-family',
        '--tabs-slider-font-weight': '--button-font-weight',
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry}</code>
          </td>
        </tr>
      ));
}