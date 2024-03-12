import { Box } from '@rhino-ui/components/src/components/box/box';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function Sizes() {
    const [value, setValue] = useState('');
      const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('');
      const [valueResponsive, setValueResponsive] = useState('');
      return (
        <Box
          direction={{
            base: 'column',
          }}
          gap={{
            base: 'sm',
            tablet: 'md',
            desktop: 'lg',
            hd: 'lg',
          }}
          width="100%"
        >
          <TextInput
            id="sizeSmall"
            value={value}
            label="Small Size"
            size="sm"
            onChange={event => setValue(event.target.value)}
          />
          <TextInput
            id="sizeMedium"
            value={value1}
            label="Medium Size"
            onChange={event => setValue1(event.target.value)}
          />
          <TextInput
            id="sizeLarge"
            value={value2}
            label="Large Size"
            size="lg"
            onChange={event => setValue2(event.target.value)}
          />
          <TextInput
            id="responsiveSize"
            value={valueResponsive}
            label="Responsive Size"
            size={{ base: 'sm', tablet: 'md', desktop: 'lg' }}
            onChange={event => setValueResponsive(event.target.value)}
          />
        </Box>
      );
}