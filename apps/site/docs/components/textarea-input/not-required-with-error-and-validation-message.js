import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function NotRequiredWithErrorAndValidationMessage() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="notRequiredWithValidationMessage"
          value={value}
          label="TextareaInput Label"
          onChange={event => setValue(event.target.value)}
          error="Helpful validation message"
        />
      );
}