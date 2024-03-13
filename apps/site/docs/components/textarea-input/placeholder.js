import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Placeholder() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="placeholder"
          value={value}
          label="Placholder TextareaInput"
          onChange={event => setValue(event.target.value)}
          placeholder="Custom placeholder..."
        />
      );
}