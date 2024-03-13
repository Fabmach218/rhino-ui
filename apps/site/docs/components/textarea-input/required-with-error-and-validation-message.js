import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function RequiredWithErrorAndValidationMessage() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="requiredWithValidationMessage"
          value={value}
          label="TextareaInput Label"
          onChange={event => setValue(event.target.value)}
          isRequired
          error="Helpful validation message"
        />
      );
}