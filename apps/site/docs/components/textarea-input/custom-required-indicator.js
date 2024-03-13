import { Box } from "@rhino-ui/components/src/components/box/box";
import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function CustomRequiredIndicator() {
    const [value, setValue] = useState('');
      const [value2, setValue2] = useState('');
      return (
        <Box gap="md">
          <TextareaInput
            id="requiredWithoutIndicator"
            label="Required Without Indicator"
            value={value}
            onChange={event => setValue(event.target.value)}
            isRequired
            requiredIndicator={null}
          />
          <TextareaInput
            id="requiredCustomIndicator"
            label="Required Custom Indicator"
            value={value2}
            onChange={event => setValue2(event.target.value)}
            isRequired
            requiredIndicator=" (required)"
          />
        </Box>
      );
}