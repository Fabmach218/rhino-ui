import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Heading } from "@rhino-ui/components/src/components/heading/heading";
import { Popover } from "@rhino-ui/components/src/components/popover/popover";
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";

export default function Hover() {
    const {
        isOpen: isPopoverOpen,
        handleClose: closePopover,
        handleOpen: openPopover,
      } = useOpenClose();
      const popoverContent = (
        <>
          <Heading style={{ marginBottom: '0.5rem' }}>
            I just appeared on hover!
          </Heading>
          <p>
            My visibility can easily be managed by attaching listeners to the
            trigger element
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
              background: 'primary-light',
            }}
          >
            <Button
              onMouseOver={openPopover}
              onMouseOut={closePopover}
              variant="light"
            >
              Hover Me
            </Button>
          </Popover>
        </Box>
      );
}