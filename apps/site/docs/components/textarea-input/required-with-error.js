import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function RequiredWithError() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="requiredWithError"
          value={value}
          label="TextareaInput Label"
          onChange={event => setValue(event.target.value)}
          error={true}
          isRequired
        />
      );
}