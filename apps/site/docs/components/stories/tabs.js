import { useState } from 'react';
import { TabPanels } from "@rhino-ui/components/src/components/tab-panels/tab-panels";
import { Tabs } from "@rhino-ui/components/src/components/tabs/tabs";
import { Box } from '@rhino-ui/components/src/components/box/box';

export function Default() {
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

export function WithPanels() {
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

export function FullWidth() {
    const [selectedTab, setSelectedTab] = useState(0);
      return (
        <>
          <Tabs
            value={selectedTab}
            onChange={(event, index) => {
              setSelectedTab(index);
            }}
            isFullWidth
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

export function Centered() {
    const [selectedTab, setSelectedTab] = useState(0);
      return (
        <>
          <Tabs
            value={selectedTab}
            onChange={(event, index) => {
              setSelectedTab(index);
            }}
            isCentered
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

export function Overflow() {
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

export function Sizes() {
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

export function AnchorElements() {
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

export function DesignTokens() {
    const tokens = {
        '--tabs-font-weight': '--size-font-weight-bold',
        '--tabs-font-color-hover': '--color-brand-primary-500',
        '--tabs-selected-border-color': '--color-brand-primary-500',
        '--tabs-selected-font-color': '--color-brand-primary-500',
        '--tabs-selected-font-color-hover': '--color-brand-primary-600',
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