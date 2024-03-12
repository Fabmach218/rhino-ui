import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function CreditCardMask() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="withCreditCardMask"
          value={value}
          label="Label"
          onChange={event => setValue(event.target.value)}
          type="tel"
          inputMask="creditCard"
        />
      );
}