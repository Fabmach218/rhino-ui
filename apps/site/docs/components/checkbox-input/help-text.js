import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function HelpText() {
    const [value, setValue] = useState(null);
      return (
        <CheckboxInput
          id="helpTextCheckbox"
          label="Checkbox with help text"
          helpText="More helpful text about this checkbox"
          isChecked={value}
          onChange={event => setValue(event.target.checked)}
        />
      );
}