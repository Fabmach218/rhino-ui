import BrowserOnly from '@docusaurus/BrowserOnly';
import { useState } from 'react';
import { useOpenClose } from "@rhino-ui/components/src/hooks/use-open-close/use-open-close";
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';
import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { Popover } from '@rhino-ui/components/src/components/popover/popover';

export function BasicUsage() {
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

export function CustomClass() {
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

export function Styling() {
    const { isOpen: isPopoverOpen, handleToggle: togglePopover } =
        useOpenClose();
      const [popoverBackground, setPopoverBackground] = useState({
        value: 'white',
        label: 'White',
      });
      const [popoverFontColor, setPopoverFontColor] = useState({
        value: 'dark',
        label: 'Dark',
      });
      const [popoverRadius, setPopoverRadius] = useState({
        value: 'sm',
        label: 'Small',
      });
      const backgroundOptions = [
        { value: 'white', label: 'White' },
        { value: 'primary', label: 'Primary' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'tertiary', label: 'Tertiary' },
        { value: 'warning', label: 'Warning' },
        { value: 'grey-light', label: 'Grey Light' },
        { value: 'grey-dark', label: 'Grey Dark' },
      ];
      const fontColorOptions = [
        { value: 'white', label: 'White' },
        { value: 'dark', label: 'Dark' },
      ];
      const borderRadiusOptions = [
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' },
      ];
      return (
        <Box height="400px">
          <Box direction="row" gap="md" wrap>
            <Popover
              content={
                <>
                  <p>Hello world!</p>
                  <p>Style me any way you want</p>
                </>
              }
              isOpen={isPopoverOpen}
              placement={'right'}
              contentContainerProps={{
                padding: 'sm',
                background: popoverBackground.value,
                color: popoverFontColor.value,
                radius: popoverRadius.value,
              }}
            >
              <Button onClick={togglePopover} variant="light">
                Toggle Popover
              </Button>
            </Popover>
          </Box>
          <Box direction="row" gap="sm" wrap margin="3xl 0 0 0">
            <Box width="200px">
              <SelectInput
                options={backgroundOptions}
                onChange={event => {
                  setPopoverBackground(event.target.value);
                }}
                value={popoverBackground}
                label="Background Color"
              />
            </Box>
            <Box width="200px">
              <SelectInput
                options={fontColorOptions}
                onChange={event => {
                  setPopoverFontColor(event.target.value);
                }}
                value={popoverFontColor}
                label="Font Color"
              />
            </Box>
            <Box width="200px">
              <SelectInput
                options={borderRadiusOptions}
                onChange={event => {
                  setPopoverRadius(event.target.value);
                }}
                value={popoverRadius}
                label="Border Radius"
              />
            </Box>
          </Box>
        </Box>
      );
}

export function Placement() {
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

export function WithAPortal() {
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
        <BrowserOnly>
          {() =>
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
          }
        </BrowserOnly>
      );
}

export function Hover() {
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

export function OutsideClicks() {
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
        <BrowserOnly>
          {() =>
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
          }
        </BrowserOnly>
      );
}

export function TrappingFocus() {
    const [inputValue, setInputValue] = useState('');
      const {
        isOpen: isPopoverOpen,
        handleClose: closePopover,
        handleToggle: togglePopover,
      } = useOpenClose();
      const handleInputChange = event => {
        setInputValue(event.target.value);
      };
      const popoverContent = (
        <>
          <Box direction="column" gap="sm">
            <Heading>
              Only the elements on this Popover can be tabbed into
            </Heading>
            <TextInput onChange={handleInputChange} value={inputValue} />
            <Button>Submit</Button>
          </Box>
        </>
      );
      return (
        <BrowserOnly>
          {() =>
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
                onClickOutside={closePopover}
                trapFocus
              >
                <Button onClick={togglePopover} variant="light">
                  Toggle Popover
                </Button>
              </Popover>
            </Box>
          }
        </BrowserOnly>
      );
}

export function HideArrow() {
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

export function OffsetDistance() {
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
        <BrowserOnly>
          {() => 
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
          }
        </BrowserOnly>
      );
}