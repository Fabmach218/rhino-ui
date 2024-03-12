import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Required() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="required"
          value={value}
          label="Required Text Input"
          onChange={event => setValue(event.target.value)}
          isRequired
        />
      );
}