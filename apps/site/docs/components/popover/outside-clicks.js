import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Heading } from "@rhino-ui/components/src/components/heading/heading";
import { Popover } from "@rhino-ui/components/src/components/popover/popover";
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";

export default function OutsideClicks() {
    const {
        isOpen: isPopoverOpen,
        handleClose: closePopover,
        handleToggle: togglePopover,
      } = useOpenClose();
      const popoverContent = (
        <>
          <Heading style={{ marginBottom: '0.5rem' }}>
            I will close if you click outside!
          </Heading>
          <p>The event listener is attached to the document body.</p>
        </>
      );
      return (
        <Box display="inline-block">
          <Popover
            content={popoverContent}
            isOpen={isPopoverOpen}
            placement="right-start"
            withPortal
            portalTarget={document.body}
            onClickOutside={closePopover}
            contentContainerProps={{
              padding: 'md',
              background: 'primary-light',
            }}
          >
            <Button onClick={togglePopover} variant="light">
              Toggle Popover
            </Button>
          </Popover>
        </Box>
      );
}