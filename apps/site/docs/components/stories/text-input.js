import { Box } from '@rhino-ui/components/src/components/box/box';
import { Icon } from '@rhino-ui/components/src/components/icon/icon';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export function Default() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="default"
          value={value}
          label="TextInput Label"
          onChange={event => setValue(event.target.value)}
        />
      );
}

export function Required() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="required"
          value={value}
          label="Required Text Input"
          onChange={event => setValue(event.target.value)}
          isRequired
        />
      );
}

export function CustomRequiredIndicator() {
    const [value, setValue] = useState('');
      const [value2, setValue2] = useState('');
      return (
        <Box gap="md">
          <TextInput
            id="requiredWithoutIndicator"
            label="Required Without Indicator"
            value={value}
            onChange={event => setValue(event.target.value)}
            isRequired
            requiredIndicator={null}
          />
          <TextInput
            id="requiredCustomIndicator"
            label="Required Custom Indicator"
            value={value2}
            onChange={event => setValue2(event.target.value)}
            isRequired
            requiredIndicator=" (required)"
          />
        </Box>
      );
}

export function HelpText() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="helpText"
          value={value}
          label="Mobile Phone"
          helpText="We willl use this phone number to contact you via text"
          onChange={event => setValue(event.target.value)}
        />
      );
}

export function Placeholder() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="placeholder"
          value={value}
          label="TextInput with placeholder"
          onChange={event => setValue(event.target.value)}
          placeholder="Custom placeholder..."
        />
      );
}

export function Autofocus() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="autofocus"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          autoFocus
        />
      );
}

export function HiddenLabel() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="hiddenLabel"
          value={value}
          label="Hidden Label"
          onChange={event => setValue(event.target.value)}
          hideLabel
        />
      );
}

export function PreffixAndSuffix() {
    const [prefixValue1, setPrefixValue1] = useState('rhinolabssolar');
      const [prefixValue2, setPrefixValue2] = useState('49');
      const [prefixValue3, setPrefixValue3] = useState('');
      const [prefixValue4, setPrefixValue4] = useState('Pre-populated Value');
      return (
        <Box gap="md">
          <TextInput
            id="prefixSuffix1"
            value={prefixValue1}
            label="Prefix"
            onChange={event => setPrefixValue1(event.target.value)}
            prefix="@"
          />
          <TextInput
            id="prefixSuffix2"
            value={prefixValue2}
            label="Prefix and Suffix"
            onChange={event => setPrefixValue2(event.target.value)}
            prefix="$"
            suffix="per watt"
          />
          <TextInput
            id="prefixSuffix3"
            value={prefixValue3}
            label="Suffix"
            placeholder="Contact name"
            onChange={event => setPrefixValue3(event.target.value)}
            suffix={<Icon name="book" />}
          />
          <TextInput
            id="prefixSuffix4"
            value={prefixValue4}
            label="Suffix with Clear"
            placeholder="Contact name"
            onChange={event => setPrefixValue4(event.target.value)}
            onClear={event => setPrefixValue4('')}
            suffix={<Icon name="search" />}
          />
        </Box>
      );
}

export function Disabled() {
    const [value, setValue] = useState('Preset value');
      return (
        <TextInput
          id="disabledWithValue"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          isDisabled
        />
      );
}

export function Clearable() {
    const [value, setValue] = useState('clear me');
      return (
        <TextInput
          id="required"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          onClear={event => setValue('')}
          isRequired
        />
      );
}

export function Sizes() {
    const [value, setValue] = useState('');
      const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('');
      const [valueResponsive, setValueResponsive] = useState('');
      return (
        <Box
          direction={{
            base: 'column',
          }}
          gap={{
            base: 'sm',
            tablet: 'md',
            desktop: 'lg',
            hd: 'lg',
          }}
          width="100%"
        >
          <TextInput
            id="sizeSmall"
            value={value}
            label="Small Size"
            size="sm"
            onChange={event => setValue(event.target.value)}
          />
          <TextInput
            id="sizeMedium"
            value={value1}
            label="Medium Size"
            onChange={event => setValue1(event.target.value)}
          />
          <TextInput
            id="sizeLarge"
            value={value2}
            label="Large Size"
            size="lg"
            onChange={event => setValue2(event.target.value)}
          />
          <TextInput
            id="responsiveSize"
            value={valueResponsive}
            label="Responsive Size"
            size={{ base: 'sm', tablet: 'md', desktop: 'lg' }}
            onChange={event => setValueResponsive(event.target.value)}
          />
        </Box>
      );
}

export function PhoneMask() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="withPhoneMask"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          type="tel"
          inputMask="phone"
        />
      );
}

export function CreditCardMask() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="withCreditCardMask"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          type="tel"
          inputMask="creditCard"
        />
      );
}

export function DateMask() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="withDateMask"
          value={value}
          label="Date of Birth"
          onChange={event => setValue(event.target.value)}
          inputMask="date"
          type="tel"
          placeholder="MM-DD-YYYY"
        />
      );
}

export function MaxLength() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="maxLength"
          value={value}
          label="Label"
          maxLength="5"
          onChange={event => setValue(event.target.value)}
          placeholder="Can't enter more than 5 characters..."
        />
      );
}

export function ValidationError() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="requiredWithValidationMessage"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          isRequired
          error="Helpful validation message"
        />
      );
}