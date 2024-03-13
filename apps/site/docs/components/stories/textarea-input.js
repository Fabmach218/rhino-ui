import { Box } from "@rhino-ui/components/src/components/box/box";
import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export function Default() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="default"
          value={value}
          label="TextareaInput"
          onChange={event => setValue(event.target.value)}
        />
      );
}

export function Required() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="required"
          value={value}
          label="Required TextareaInput"
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
          <TextareaInput
            id="requiredWithoutIndicator"
            label="Required Without Indicator"
            value={value}
            onChange={event => setValue(event.target.value)}
            isRequired
            requiredIndicator={null}
          />
          <TextareaInput
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
        <TextareaInput
          id="helpText"
          value={value}
          label="Design Notes"
          helpText="Add any design requirements or aesthetic choices that the solar system designer should know"
          onChange={event => setValue(event.target.value)}
        />
      );
}

export function Resize() {
    const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('');
      return (
        <Box gap="md">
          <TextareaInput
            id="resizeBoth"
            value={value1}
            label="Resize Me Vertically and Horizontally"
            onChange={event => setValue1(event.target.value)}
            resize="both"
          />
          <TextareaInput
            id="resizeNone"
            value={value2}
            label="Can't resize me"
            onChange={event => setValue2(event.target.value)}
            resize="none"
          />
        </Box>
      );
}

export function Sizes() {
    const [valueSm, setValueSm] = useState('');
      const [valueMd, setValueMd] = useState('');
      const [valueLg, setValueLg] = useState('');
      const [valueResponsive, setValueResponsive] = useState('');
      return (
        <Box gap="md">
          <TextareaInput
            id="Small"
            value={valueSm}
            label="Small"
            onChange={event => setValueSm(event.target.value)}
            size="sm"
          />
          <TextareaInput
            id="Medium"
            value={valueMd}
            label="Medium"
            onChange={event => setValueMd(event.target.value)}
            size="md"
          />
          <TextareaInput
            id="Large"
            value={valueLg}
            label="Large"
            onChange={event => setValueLg(event.target.value)}
            size="lg"
          />
          <TextareaInput
            id="Responsive"
            value={valueResponsive}
            label="Responsive"
            onChange={event => setValueResponsive(event.target.value)}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}

export function Placeholder() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="placeholder"
          value={value}
          label="Placholder TextareaInput"
          onChange={event => setValue(event.target.value)}
          placeholder="Custom placeholder..."
        />
      );
}

export function Autofocus() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="autofocus"
          value={value}
          label="Autofocus TextareaInput"
          onChange={event => setValue(event.target.value)}
          autoFocus
        />
      );
}

export function HiddenLabel() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="hiddenLabel"
          value={value}
          label="Hidden TextareaInput"
          onChange={event => setValue(event.target.value)}
          hideLabel
        />
      );
}

export function Disabled() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="disabled"
          value={value}
          label="Disabled TextareaInput"
          onChange={event => setValue(event.target.value)}
          isDisabled
        />
      );
}

export function DisabledWithValue() {
    const [value, setValue] = useState('Preset value');
      return (
        <TextareaInput
          id="disabledWithValue"
          value={value}
          label="Disabled TextareaInput With Value"
          onChange={event => setValue(event.target.value)}
          isDisabled
        />
      );
}

export function DisabledWithPlaceholder() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="disabledWithPlaceholder"
          value={value}
          label="Disabled TextareaInput With Placeholder"
          onChange={event => setValue(event.target.value)}
          isDisabled
          placeholder="Useful placeholder..."
        />
      );
}

export function MaxLength() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="maxLength"
          value={value}
          label="TextareaInput Label"
          maxLength="5"
          onChange={event => setValue(event.target.value)}
          placeholder="Can't enter more than 5 characters..."
        />
      );
}

export function RequiredWithError() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="requiredWithError"
          value={value}
          label="TextareaInput Label"
          onChange={event => setValue(event.target.value)}
          error={true}
          isRequired
        />
      );
}

export function RequiredWithErrorAndValidationMessage() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="requiredWithValidationMessage"
          value={value}
          label="TextareaInput Label"
          onChange={event => setValue(event.target.value)}
          isRequired
          error="Helpful validation message"
        />
      );
}

export function NotRequiredWithErrorAndValidationMessage() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="notRequiredWithValidationMessage"
          value={value}
          label="TextareaInput Label"
          onChange={event => setValue(event.target.value)}
          error="Helpful validation message"
        />
      );
}

export function ErrorWithHiddenLabel() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="errorWithHiddenLabel"
          value={value}
          label="TextareaInput Label"
          hideLabel
          onChange={event => setValue(event.target.value)}
          error="Helpful validation message"
        />
      );
}