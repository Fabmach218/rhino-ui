import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function ValidationError() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="requiredWithValidationMessage"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          isRequired
          error="Helpful validation message"
        />
      );
}