import { Box } from '@rhino-ui/components/src/components/box/box';
import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function CustomRequiredIndicator() {
    const [value, setValue] = useState(false);
      const [value2, setValue2] = useState(false);
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
        <Box gap="md">
          <RadioGroup
            title="Required Without Indicator"
            name="withoutIndicator"
            onChange={event => setValue(event.target.value)}
            value={value}
            isRequired
            options={options}
            requiredIndicator={null}
          />
          <RadioGroup
            title="Required Custom Indicator"
            name="customIndicator"
            onChange={event => setValue2(event.target.value)}
            value={value2}
            isRequired
            options={options}
            requiredIndicator=" (required)"
          />
        </Box>
      );
}