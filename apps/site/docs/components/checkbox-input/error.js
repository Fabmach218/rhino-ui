import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function Error() {
    const [value, setValue] = useState(null);
      return (
        <CheckboxInput
          id="invalidCheckbox"
          label="Label"
          isChecked={value}
          onChange={value => setValue(event.target.checked)}
          isRequired
          error="You must accept the Terms and Conditions"
        />
      );
}