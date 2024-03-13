import { Box } from '@rhino-ui/components/src/components/box/box';
import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export function Default() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="singleSelectWithLabel"
            label="Label"
            onChange={event => setValue(event.target.value)}
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
      const [value, setValue] = useState(options[1]);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
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
        <div style={{ height: '200px' }}>
          <SelectInput
            id="helpText"
            label="Flavor"
            helpText="Choose your favorite flavor"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            placeholder="Custom placeholder..."
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
        <div style={{ height: '200px' }}>
          <SelectInput
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
        <div style={{ height: '175px' }}>
          <SelectInput
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

export function MultiSelect() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="multiSelect"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isMulti
          />
        </div>
      );
}

export function MultiSelectAndPreSelected() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState([options[0], options[2]]);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="preSelectMultiSelect"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isMulti
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
        <div style={{ height: '200px' }}>
          <SelectInput
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
        <div style={{ height: '200px' }}>
          <SelectInput
            id="required"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isRequired
          />
        </div>
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
          <SelectInput
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

export function Clearable() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(options[0]);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="clearable"
            label="Label"
            value={value}
            name="myClearableSelect"
            onChange={event => setValue(event.target.value)}
            options={options}
            isClearable
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
          <SelectInput
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
        <Box gap="md" height="360px">
          <SelectInput
            id="smallSelect"
            label="Small"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            size="sm"
          />
          <SelectInput
            id="mediumSelect"
            label="Medium"
            onChange={event => setValue1(event.target.value)}
            options={options}
            value={value1}
            size="md"
          />
          <SelectInput
            id="largeSelect"
            label="Large"
            onChange={event => setValue2(event.target.value)}
            options={options}
            value={value2}
            size="lg"
          />
          <SelectInput
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

export function Portal() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <SelectInput
          id="portal"
          label="Flavors"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
          menuPortalTarget={document.body}
        />
      );
}

export function CustomClasses() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="customClasses"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            className="background-color-primary"
          />
        </div>
      );
}