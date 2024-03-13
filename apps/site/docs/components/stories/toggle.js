import { useState } from 'react';
import { Toggle } from "@rhino-ui/components/src/components/toggle/toggle";
import { Box } from '@rhino-ui/components/src/components/box/box';

export function Default() {
    const [value, setValue] = useState(null);
      return (
        <Toggle
          id="defaultStateIsUnchecked"
          label="toggle label"
          onChange={event => setValue(event.target.checked)}
          isChecked={value}
        />
      );
}

export function HelpText() {
    const [value, setValue] = useState(null);
      return (
        <Toggle
          id="helpText"
          label="toggle label"
          helpText="descriptive help text"
          onChange={event => setValue(event.target.checked)}
          isChecked={value}
        />
      );
}

export function HiddenLabel() {
    const [value, setValue] = useState(null);
      return (
        <Toggle
          id="hiddenLabelToggle"
          label="Hidden Label"
          helpText="hidden help text too"
          hideLabel
          onChange={event => setValue(event.target.checked)}
          isChecked={value}
        />
      );
}

export function Sizes() {
    const [value, setValue] = useState(true);
      return (
        <Box gap="md">
          <Toggle
            id="smToggle"
            label="small toggle"
            onChange={event => setValue(event.target.checked)}
            isChecked={value}
            size="sm"
          />
          <Toggle
            id="mediumToggle"
            label="medium toggle"
            onChange={event => setValue(event.target.checked)}
            isChecked={value}
            size="md"
          />
          <Toggle
            id="largeToggle"
            label="large toggle"
            onChange={event => setValue(event.target.checked)}
            isChecked={value}
            size="lg"
          />
          <Toggle
            id="responsiveToggle"
            label="responsive toggle"
            onChange={event => setValue(event.target.checked)}
            isChecked={value}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}

export function Disabled() {
    const [value, setValue] = useState(null);
      return (
        <Toggle
          id="disabledToggle"
          label="Label"
          onChange={event => setValue(event.target.checked)}
          isChecked={value}
          isDisabled
        />
      );
}

export function Error() {
    const [value, setValue] = useState(null);
      const [value2, setValue2] = useState(true);
      return (
        <Box gap="md">
          <Toggle
            id="invalidToggle"
            label="Agree to Terms and Conditions"
            isChecked={value}
            onChange={value => setValue(event.target.checked)}
            isRequired
            error="You must accept the Terms and Conditions"
          />
          <Toggle
            id="invalidToggle2"
            label="Roof Replacement"
            isChecked={value2}
            onChange={value2 => setValue2(event.target.checked)}
            error="Site Improvements can not be present with PPA"
          />
        </Box>
      );
}

export function DesignTokens() {
    const tokens = {
        '--toggle-background-color': '--color-brand-grey-200',
        '--toggle-background-color-checked': '--color-brand-primary-500',
        '--toggle-background-color-error': '--color-brand-danger-500',
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry}</code>
          </td>
        </tr>
      ));
}