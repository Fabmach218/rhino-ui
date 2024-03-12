import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function Default() {
    const [value, setValue] = useState('chocolate');
      const options = [
        {
          id: 'chocolate',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <RadioGroup
          name="noTitleOrDescription"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
        />
      );
}