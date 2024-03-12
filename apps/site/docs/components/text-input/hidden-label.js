import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function HiddenLabel() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="hiddenLabel"
          value={value}
          label="Hidden Label"
          onChange={event => setValue(event.target.value)}
          hideLabel
        />
      );
}