import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function Required() {
    const [value, setValue] = useState(null);
      return (
        <CheckboxInput
          id="requiredCheckboxIsUnchecked"
          label="Required Checkbox"
          isChecked={value}
          onChange={event => setValue(event.target.checked)}
          isRequired
        />
      );
}