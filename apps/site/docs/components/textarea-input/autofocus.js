import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Autofocus() {
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