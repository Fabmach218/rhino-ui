import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function HiddenLabel() {
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