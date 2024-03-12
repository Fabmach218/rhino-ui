import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Heading } from "@rhino-ui/components/src/components/heading/heading";
import { Popover } from "@rhino-ui/components/src/components/popover/popover";
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";

export default function HideArrow() {
    const {
        isOpen: isPopoverOpen,
        handleToggle: togglePopover,
        handleClose: closePopover,
      } = useOpenClose();
      const popoverContent = (
        <>
          <Box direction="column" gap="sm">
            <Heading>With no arrow</Heading>
            <p>I am floating in space</p>
          </Box>
        </>
      );
      return (
        <>
          <Popover
            content={popoverContent}
            isOpen={isPopoverOpen}
            placement="right"
            contentContainerProps={{
              padding: 'sm',
            }}
            onClickOutside={closePopover}
          >
            <Button onClick={togglePopover} variant="light">
              Toggle Popover
            </Button>
          </Popover>
        </>
      );
}