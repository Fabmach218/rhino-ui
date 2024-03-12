import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function PhoneMask() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="withPhoneMask"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          type="tel"
          inputMask="phone"
        />
      );
}