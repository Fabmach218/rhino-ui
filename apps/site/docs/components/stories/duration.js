import BrowserOnly from '@docusaurus/BrowserOnly';
import { useState, useEffect } from 'react';
import { Badge } from '@rhino-ui/components/src/components/badge/badge';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Duration } from '@rhino-ui/components/src/components/duration/duration';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';

export function SwitchingUnits() {
    return (
        <Box gap="xs">
            <Duration milliseconds={3600000} displayHours={7200000} />
            <Duration milliseconds={3600000} displayHours={3600000} /> 
        </Box>
    )
}

export function Rounding() {
    return (
        <Box gap="xs">
            <p>Up: <Duration milliseconds={60001} roundUp={true} /> </p>
            <p>Down: <Duration milliseconds={60001} roundUp={false} /> </p>
        </Box>
    )
}

export function InsideBadge() {
    return (
        <Box direction="row" gap="sm">
            <Badge message={<Duration milliseconds={60001} />} variant="default"/>
            <Badge message={<Duration milliseconds={3600000} />} variant="warning" />
            <Badge message={<Duration milliseconds={86500000} />} variant="danger"/>
        </Box>
    )
}

export function Hover() {
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
        <BrowserOnly>
          {() =>
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
          }
        </BrowserOnly>
      );
}