import { useState, useEffect } from 'react';
import { Badge } from '@rhino-ui/components/src/components/badge/badge';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Duration } from '@rhino-ui/components/src/components/duration/duration';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';

export default function Hover() {
    const [isPopoverOpen, setPopoverOpen] = useState(false);
      const popoverContent = (
        <>
          <p>
            <Duration milliseconds={86500000} displayMinutes={10000000000} /> or <Duration milliseconds={86500000} displayHours={10000000000} /> or <Duration milliseconds={86500000} displayDays={10000000000}/>
          </p>
        </>
      );
      useEffect(() => {
        console.log(isPopoverOpen);
      }, [isPopoverOpen]);
      return (
        <Box display="inline-block">
          <Popover
            content={popoverContent}
            isOpen={isPopoverOpen}
            placement="right-start"
            contentContainerProps={{
              background: 'secondary',
              color: 'white',
            }}
            withPortal
            portalTarget={document.body}
          >
            <Box padding="sm">
              <Badge display="" onMouseOver={() => setPopoverOpen(true)} onMouseOut={() => setPopoverOpen(false)} message={<Duration milliseconds={86500000} />} variant="default"/>
            </Box>
          </Popover>
        </Box>
      );
}