import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function MaxLength() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="maxLength"
          value={value}
          label="Label"
          maxLength="5"
          onChange={event => setValue(event.target.value)}
          placeholder="Can't enter more than 5 characters..."
        />
      );
}