import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function MaxLength() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="maxLength"
          value={value}
          label="TextareaInput Label"
          maxLength="5"
          onChange={event => setValue(event.target.value)}
          placeholder="Can't enter more than 5 characters..."
        />
      );
}