import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function DisabledGroup() {
    const [value, setValue] = useState('react');
      const options = [
        {
          id: 'react',
          value: 'react',
          label: 'React',
        },
        {
          id: 'angular',
          value: 'angular',
          label: 'Angular',
        },
        {
          id: 'vue',
          value: 'vue',
          label: 'Vue',
          disabled: true,
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="disabledGroup"
          onChange={event => setValue(event.target.value)}
          value={value}
          isDisabled
          options={options}
        />
      );
}