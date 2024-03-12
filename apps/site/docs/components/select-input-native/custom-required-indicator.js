import { Box } from '@rhino-ui/components/src/components/box/box';
import { SelectInputNative } from '@rhino-ui/components/src/components/select-input-native/select-input-native';
import { useState } from 'react'

export default function CustomRequiredIndicator() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState('');
      const [value2, setValue2] = useState('');
      return (
        <Box gap="md">
          <SelectInputNative
            id="withouRequiredIndicator"
            label="Required Without Indicator"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isRequired
            requiredIndicator={null}
          />
          <SelectInputNative
            id="customRequiredIndicator"
            label="Required Custom Indicator"
            value={value2}
            onChange={event => setValue2(event.target.value)}
            options={options}
            isRequired
            requiredIndicator=" (required)"
          />
        </Box>
      );
}