import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function Required() {
    const [value, setValue] = useState('cat');
      const options = [
        {
          id: 'cat',
          value: 'cat',
          label: 'Cat',
        },
        {
          id: 'dog',
          value: 'dog',
          label: 'Dog',
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="required"
          onChange={event => setValue(event.target.value)}
          value={value}
          isRequired
          options={options}
        />
      );
}