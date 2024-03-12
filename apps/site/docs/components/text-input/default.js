import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Default() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="default"
          value={value}
          label="TextInput Label"
          onChange={event => setValue(event.target.value)}
        />
      );
}