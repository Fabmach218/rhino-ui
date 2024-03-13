import { Box } from '@rhino-ui/components/src/components/box/box';
import { SelectInputNative } from '@rhino-ui/components/src/components/select-input-native/select-input-native';
import { useState } from 'react'

export function Default() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div>
          <SelectInputNative
            id="default Select"
            label="Label"
            onChange={event => {
              setValue(event.target.value);
            }}
            options={options}
            value={value}
          />
        </div>
      );
}

export function PreSelected() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(options[1].value);
      return (
        <div>
          <SelectInputNative
            id="preSelected"
            label="Label"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
          />
        </div>
      );
}

export function HelpText() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div>
          <SelectInputNative
            id="helpText"
            label="Flavor"
            helpText="Choose your favorite flavor"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
          />
        </div>
      );
}

export function Placeholder() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div>
          <SelectInputNative
            id="customPlaceholder"
            label="Label"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            placeholder="Custom placeholder..."
          />
        </div>
      );
}

export function HiddenLabel() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div>
          <SelectInputNative
            id="labelHidden"
            label="My label is hidden"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            hideLabel
          />
        </div>
      );
}

export function Autofocus() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div>
          <SelectInputNative
            id="autoFocus"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            autoFocus
          />
        </div>
      );
}

export function Required() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <SelectInputNative
          id="required"
          label="Required Input"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
          isRequired
        />
      );
}

export function CustomRequiredIndicator() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState('');
      const [value2, setValue2] = useState('');
      return (
        <Box gap="md">
          <SelectInputNative
            id="withouRequiredIndicator"
            label="Required Without Indicator"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isRequired
            requiredIndicator={null}
          />
          <SelectInputNative
            id="customRequiredIndicator"
            label="Required Custom Indicator"
            value={value2}
            onChange={event => setValue2(event.target.value)}
            options={options}
            isRequired
            requiredIndicator=" (required)"
          />
        </Box>
      );
}

export function Disabled() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div style={{ height: '85px' }}>
          <SelectInputNative
            id="disabled"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isDisabled
          />
        </div>
      );
}

export function Error() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div style={{ height: '200px' }}>
          <SelectInputNative
            id="error"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isRequired
            error="Helpful validation message"
          />
        </div>
      );
}

export function Sizes() {
    const [value, setValue] = useState('');
      const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('');
      const [value3, setValue3] = useState('');
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <Box gap="md">
          <SelectInputNative
            id="smallSelect"
            label="Small"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            size="sm"
          />
          <SelectInputNative
            id="mediumSelect"
            label="Medium"
            onChange={event => setValue1(event.target.value)}
            options={options}
            value={value1}
            size="md"
          />
          <SelectInputNative
            id="largeSelect"
            label="Large"
            onChange={event => setValue2(event.target.value)}
            options={options}
            value={value2}
            size="lg"
          />
          <SelectInputNative
            id="responsiveSelect"
            label="Responsive"
            onChange={event => setValue3(event.target.value)}
            options={options}
            value={value3}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}