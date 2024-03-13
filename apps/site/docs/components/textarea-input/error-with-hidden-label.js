import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function ErrorWithHiddenLabel() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="errorWithHiddenLabel"
          value={value}
          label="TextareaInput Label"
          hideLabel
          onChange={event => setValue(event.target.value)}
          error="Helpful validation message"
        />
      );
}