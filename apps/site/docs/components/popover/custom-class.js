import { Button } from "@rhino-ui/components/src/components/button/button";
import { Popover } from "@rhino-ui/components/src/components/popover/popover";
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";

export default function CustomClass() {
    const {
        isOpen: isPopoverOpen,
        handleToggle: togglePopover,
        handleClose: closePopover,
      } = useOpenClose();
      const popoverContent = <>Hello!</>;
      return (
        <div>
          <Popover
            content={popoverContent}
            isOpen={isPopoverOpen}
            placement="right"
            contentContainerProps={{
              padding: 'sm',
            }}
            className="font-color-danger"
            onClickOutside={closePopover}
          >
            <Button onClick={togglePopover} variant="light">
              Toggle Popover
            </Button>
          </Popover>
        </div>
      );
}