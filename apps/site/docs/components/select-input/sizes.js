import { Box } from '@rhino-ui/components/src/components/box/box';
import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

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
        <Box gap="md" height="360px">
          <SelectInput
            id="smallSelect"
            label="Small"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            size="sm"
          />
          <SelectInput
            id="mediumSelect"
            label="Medium"
            onChange={event => setValue1(event.target.value)}
            options={options}
            value={value1}
            size="md"
          />
          <SelectInput
            id="largeSelect"
            label="Large"
            onChange={event => setValue2(event.target.value)}
            options={options}
            value={value2}
            size="lg"
          />
          <SelectInput
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