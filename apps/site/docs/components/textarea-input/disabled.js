import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Disabled() {
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