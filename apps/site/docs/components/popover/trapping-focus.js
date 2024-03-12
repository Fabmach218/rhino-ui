import { useState } from 'react';
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';

export default function TrappingFocus() {
    const [inputValue, setInputValue] = useState('');
      const {
        isOpen: isPopoverOpen,
        handleClose: closePopover,
        handleToggle: togglePopover,
      } = useOpenClose();
      const handleInputChange = event => {
        setInputValue(event.target.value);
      };
      const popoverContent = (
        <>
          <Box direction="column" gap="sm">
            <Heading>
              Only the elements on this Popover can be tabbed into
            </Heading>
            <TextInput onChange={handleInputChange} value={inputValue} />
            <Button>Submit</Button>
          </Box>
        </>
      );
      return (
        <Box display="inline-block">
          <Popover
            content={popoverContent}
            isOpen={isPopoverOpen}
            placement="right-start"
            contentContainerProps={{
              padding: 'md',
              background: 'grey-lightest',
            }}
            withPortal
            portalTarget={document.body}
            onClickOutside={closePopover}
            trapFocus
          >
            <Button onClick={togglePopover} variant="light">
              Toggle Popover
            </Button>
          </Popover>
        </Box>
      );
}