import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function Row() {
    const [value, setValue] = useState('one');
      const options = [
        {
          id: 'one',
          value: 'one',
          label: 'One',
        },
        {
          id: 'two',
          value: 'two',
          label: 'Two',
        },
        {
          id: 'three',
          value: 'three',
          label: 'Three',
        },
      ];
      return (
        <RadioGroup
          title="Horizontal"
          direction="row"
          name="horizontal"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
          isRequired
        />
      );
}