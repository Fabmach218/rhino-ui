import { useState } from 'react';
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';

export default function Styling() {
    const { isOpen: isPopoverOpen, handleToggle: togglePopover } =
        useOpenClose();
      const [popoverBackground, setPopoverBackground] = useState({
        value: 'white',
        label: 'White',
      });
      const [popoverFontColor, setPopoverFontColor] = useState({
        value: 'dark',
        label: 'Dark',
      });
      const [popoverRadius, setPopoverRadius] = useState({
        value: 'sm',
        label: 'Small',
      });
      const backgroundOptions = [
        { value: 'white', label: 'White' },
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'tertiary', label: 'Tertiary' },
        { value: 'warning', label: 'Warning' },
        { value: 'grey-light', label: 'Grey Light' },
        { value: 'grey-dark', label: 'Grey Dark' },
      ];
      const fontColorOptions = [
        { value: 'white', label: 'White' },
        { value: 'dark', label: 'Dark' },
      ];
      const borderRadiusOptions = [
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' },
      ];
      return (
        <Box height="400px">
          <Box direction="row" gap="md" wrap>
            <Popover
              content={
                <>
                  <p>Hello world!</p>
                  <p>Style me any way you want</p>
                </>
              }
              isOpen={isPopoverOpen}
              placement={'right'}
              contentContainerProps={{
                padding: 'sm',
                background: popoverBackground.value,
                color: popoverFontColor.value,
                radius: popoverRadius.value,
              }}
            >
              <Button onClick={togglePopover} variant="light">
                Toggle Popover
              </Button>
            </Popover>
          </Box>
          <Box direction="row" gap="sm" wrap margin="3xl 0 0 0">
            <Box width="200px">
              <SelectInput
                options={backgroundOptions}
                onChange={event => {
                  setPopoverBackground(event.target.value);
                }}
                value={popoverBackground}
                label="Background Color"
              />
            </Box>
            <Box width="200px">
              <SelectInput
                options={fontColorOptions}
                onChange={event => {
                  setPopoverFontColor(event.target.value);
                }}
                value={popoverFontColor}
                label="Font Color"
              />
            </Box>
            <Box width="200px">
              <SelectInput
                options={borderRadiusOptions}
                onChange={event => {
                  setPopoverRadius(event.target.value);
                }}
                value={popoverRadius}
                label="Border Radius"
              />
            </Box>
          </Box>
        </Box>
      );
}