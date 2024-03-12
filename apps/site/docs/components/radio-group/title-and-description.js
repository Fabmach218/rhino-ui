import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function TitleAndDescription() {
    const [value, setValue] = useState('light');
      const options = [
        {
          id: 'light',
          value: 'light',
          label: 'Light',
        },
        {
          id: 'dark',
          value: 'dark',
          label: 'Dark',
        },
      ];
      return (
        <RadioGroup
          title="Title"
          description="Description"
          name="withTitleAndDescription"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}