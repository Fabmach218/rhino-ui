import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function PreSelectedOption() {
    const options = [
        {
          id: 'car',
          value: 'car',
          label: 'Car',
        },
        {
          id: 'truck',
          value: 'truck',
          label: 'Truck',
        },
        {
          id: 'motorcycle',
          value: 'motorcycle',
          label: 'Motorcycle',
        },
      ];
      const [value, setValue] = useState(options[1].value);
      return (
        <RadioGroup
          title="Title"
          name="prevalue"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}