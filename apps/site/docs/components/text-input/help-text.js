import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function HelpText() {
    const [value, setValue] = useState('');
      return (
        <TextInput
          id="helpText"
          value={value}
          label="Mobile Phone"
          helpText="We willl use this phone number to contact you via text"
          onChange={event => setValue(event.target.value)}
        />
      );
}