import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Placeholder() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="placeholder"
          value={value}
          label="TextInput with placeholder"
          onChange={event => setValue(event.target.value)}
          placeholder="Custom placeholder..."
        />
      );
}