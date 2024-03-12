import { Box } from '@rhino-ui/components/src/components/box/box';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';
import { useOpenClose } from '@rhino-ui/components/src/hooks/use-open-close/use-open-close';
import { useState } from 'react';

export default function OffsetDistance() {
    const [offset, setOffset] = useState(12);
      const { isOpen: isPopoverOpen, handleToggle: togglePopover } = useOpenClose();
      const popoverContent = (
        <>
          <Box direction="column" gap="sm">
            <Heading>Custom Offset</Heading>
            <p>Near, far, wherever your are...</p>
          </Box>
        </>
      );
      return (
        <>
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
              hasArrow={false}
              offsetFromTarget={offset}
            >
              <Button onClick={togglePopover} variant="light">
                Toggle Popover
              </Button>
            </Popover>
          </Box>
          <Box margin="2xl 0 0 0" maxWidth="300px">
            <label
              htmlFor="offset"
              style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}
            >
              Offset
            </label>
            <input
              type="range"
              id="offset"
              name="offset"
              min="0"
              max="24"
              step="1"
              value={offset}
              onChange={event => {
                setOffset(event.target.value);
              }}
              style={{ marginBottom: '0.25rem' }}
            />
            <span style={{ display: 'inline' }}>Value: {offset}</span>
          </Box>
        </>
      );
}