import { Box } from '@rhino-ui/components/src/components/box/box';
import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export default function Sizes() {
    const [state, setState] = useState({
        sm: null,
        md: null,
        lg: null,
        responsive: null,
      });
      const options = id => [
        { id: `purple__${id}`, value: 'purple', label: 'Purple' },
        { id: `green__${id}`, value: 'green', label: 'Green' },
      ];
      const handleChange = (event, key) => {
        const value = event.target.value;
        setState(prevState => ({ ...prevState, [key]: value }));
      };
      return (
        <Box gap="lg">
          <RadioGroup
            title="Small"
            name="smallRadio"
            onChange={event => handleChange(event, 'sm')}
            value={state.sm}
            options={options('sm')}
            size="sm"
          />
          <RadioGroup
            title="Medium"
            name="mediumRadio"
            onChange={event => handleChange(event, 'md')}
            value={state.md}
            options={options('md')}
            size="md"
          />
          <RadioGroup
            title="Large"
            name="largeRadio"
            onChange={event => handleChange(event, 'lg')}
            value={state.lg}
            options={options('lg')}
            size="lg"
          />
          <RadioGroup
            title="Responsive"
            name="responsiveRadio"
            onChange={event => handleChange(event, 'responsive')}
            value={state.responsive}
            options={options('responsive')}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}