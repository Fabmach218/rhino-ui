import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function DisabledChecked() {
    const [value, setValue] = useState(true);
      return (
        <CheckboxInput
          id="disabledAndUnchecked"
          label="Label"
          isChecked={value}
          onChange={value => setValue(event.target.checked)}
          isDisabled
        />
      );
}