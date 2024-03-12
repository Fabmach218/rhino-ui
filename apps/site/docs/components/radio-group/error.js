import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function Error() {
    const [value, setValue] = useState('apple');
      const options = [
        {
          id: 'apple',
          value: 'apple',
          label: 'Apple',
        },
        {
          id: 'orange',
          value: 'orange',
          label: 'Orange',
        },
        {
          id: 'banana',
          value: 'banana',
          label: 'Banana',
          disabled: true,
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="error"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
          isRequired
          error="Helpful validation message"
        />
      );
}