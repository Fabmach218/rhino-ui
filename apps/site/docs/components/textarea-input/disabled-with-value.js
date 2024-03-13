import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function DisabledWithValue() {
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