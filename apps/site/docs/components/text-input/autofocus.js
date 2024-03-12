import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Autofocus() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="autofocus"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          autoFocus
        />
      );
}