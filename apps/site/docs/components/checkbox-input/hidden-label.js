import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";

export default function HiddenLabel() {
    const [value, setValue] = useState(null);
      return (
        <CheckboxInput
          id="hiddenLabel"
          hideLabel
          onChange={value => setValue(event.target.checked)}
          isChecked={value}
        />
      );
}