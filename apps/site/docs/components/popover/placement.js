import { Box } from '@rhino-ui/components/src/components/box/box';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';
import { useState } from 'react';

export default function Placement() {
    const [isPopoverOpen, setPopoverOpen] = useState({
        auto: false,
        'auto-start': false,
        'auto-end': false,
        top: false,
        bottom: false,
        right: false,
        left: false,
        'top-start': false,
        'top-end': false,
        'bottom-start': false,
        'bottom-end': false,
        'right-start': false,
        'right-end': false,
        'left-start': false,
        'left-end': false,
      });
      const handleOpenPopover = key => {
        setPopoverOpen({ ...isPopoverOpen, [key]: !isPopoverOpen[key] });
      };
      const positions = [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ];
      return (
        <Box direction="row" gap="md" wrap>
          {positions.map(position => (
            <Box
              height="100px"
              padding="5xl"
              display="inline-block"
              key={position}
            >
              <Popover
                content={<>{position}</>}
                isOpen={isPopoverOpen[position]}
                placement={position}
                contentContainerProps={{
                  padding: 'sm',
                  background: 'secondary',
                  color: 'white',
                }}
              >
                <Button
                  onClick={() => handleOpenPopover(position)}
                  variant="light"
                >
                  {position}
                </Button>
              </Popover>
            </Box>
          ))}
        </Box>
      );
}