import { Box } from '@rhino-ui/components/src/components/box/box';
import { SelectInputNative } from '@rhino-ui/components/src/components/select-input-native/select-input-native';
import { useState } from 'react'

export default function Sizes() {
    const [value, setValue] = useState('');
      const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('');
      const [value3, setValue3] = useState('');
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <Box gap="md">
          <SelectInputNative
            id="smallSelect"
            label="Small"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            size="sm"
          />
          <SelectInputNative
            id="mediumSelect"
            label="Medium"
            onChange={event => setValue1(event.target.value)}
            options={options}
            value={value1}
            size="md"
          />
          <SelectInputNative
            id="largeSelect"
            label="Large"
            onChange={event => setValue2(event.target.value)}
            options={options}
            value={value2}
            size="lg"
          />
          <SelectInputNative
            id="responsiveSelect"
            label="Responsive"
            onChange={event => setValue3(event.target.value)}
            options={options}
            value={value3}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}