import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function DateMask() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="withDateMask"
          value={value}
          label="Date of Birth"
          onChange={event => setValue(event.target.value)}
          inputMask="date"
          type="tel"
          placeholder="MM-DD-YYYY"
        />
      );
}