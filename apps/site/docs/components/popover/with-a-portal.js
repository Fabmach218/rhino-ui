import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Heading } from "@rhino-ui/components/src/components/heading/heading";
import { Popover } from "@rhino-ui/components/src/components/popover/popover";
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";

export default function WithAPortal() {
    const {
        isOpen: isPopoverOpen,
        handleToggle: togglePopover,
        handleClose: closePopover,
      } = useOpenClose();
      const popoverContent = (
        <>
          <Heading style={{ marginBottom: '0.5rem' }}>
            I am living in the body element!
          </Heading>
          <p>
            That's why I can break out of my container without getting cut off
          </p>
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
              background: 'secondary',
              color: 'white',
            }}
            withPortal
            portalTarget={document.body}
            onClickOutside={closePopover}
          >
            <Button onClick={togglePopover} variant="light">
              Toggle Popover
            </Button>
          </Popover>
        </Box>
      );
}