import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Clearable() {
    const [value, setValue] = useState('clear me');
      return (
        <TextInput
          id="required"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          onClear={event => setValue('')}
          isRequired
        />
      );
}