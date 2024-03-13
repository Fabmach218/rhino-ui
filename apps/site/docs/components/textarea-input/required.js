import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Required() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="required"
          value={value}
          label="Required TextareaInput"
          onChange={event => setValue(event.target.value)}
          isRequired
        />
      );
}