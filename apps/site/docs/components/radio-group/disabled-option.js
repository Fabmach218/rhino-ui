import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function DisabledOption() {
    const [value, setValue] = useState('short');
      const options = [
        {
          id: 'short',
          value: 'short',
          label: 'Short',
        },
        {
          id: 'tall',
          value: 'tall',
          label: 'Tall',
        },
        {
          id: 'gigantic',
          value: 'gigantic',
          label: 'Gigantic',
          disabled: true,
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="disabledOption"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}