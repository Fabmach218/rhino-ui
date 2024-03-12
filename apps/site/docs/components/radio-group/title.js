import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function Title() {
    const [value, setValue] = useState('purple');
      const options = [
        {
          id: 'purple',
          value: 'purple',
          label: 'Purple',
        },
        {
          id: 'green',
          value: 'green',
          label: 'Green',
        },
        {
          id: 'blue',
          value: 'blue',
          label: 'Blue',
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="withTitle"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}