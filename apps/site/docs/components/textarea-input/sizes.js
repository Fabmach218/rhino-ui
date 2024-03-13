import { Box } from "@rhino-ui/components/src/components/box/box";
import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Sizes() {
    const [valueSm, setValueSm] = useState('');
      const [valueMd, setValueMd] = useState('');
      const [valueLg, setValueLg] = useState('');
      const [valueResponsive, setValueResponsive] = useState('');
      return (
        <Box gap="md">
          <TextareaInput
            id="Small"
            value={valueSm}
            label="Small"
            onChange={event => setValueSm(event.target.value)}
            size="sm"
          />
          <TextareaInput
            id="Medium"
            value={valueMd}
            label="Medium"
            onChange={event => setValueMd(event.target.value)}
            size="md"
          />
          <TextareaInput
            id="Large"
            value={valueLg}
            label="Large"
            onChange={event => setValueLg(event.target.value)}
            size="lg"
          />
          <TextareaInput
            id="Responsive"
            value={valueResponsive}
            label="Responsive"
            onChange={event => setValueResponsive(event.target.value)}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}