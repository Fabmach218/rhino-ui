import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Default() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="default"
          value={value}
          label="TextareaInput"
          onChange={event => setValue(event.target.value)}
        />
      );
}