import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Disabled() {
    const [value, setValue] = useState('Preset value');
      return (
        <TextInput
          id="disabledWithValue"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          isDisabled
        />
      );
}