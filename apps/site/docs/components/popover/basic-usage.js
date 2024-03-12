import { Button } from "@rhino-ui/components/src/components/button/button";
import { Popover } from "@rhino-ui/components/src/components/popover/popover";
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";

export default function BasicUsage() {
    const {
        isOpen: isPopoverOpen,
        handleToggle: togglePopover,
        handleClose: closePopover,
      } = useOpenClose();
      const popoverContent = <>Hello!</>;
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