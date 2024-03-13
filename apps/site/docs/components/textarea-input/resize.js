import { Box } from "@rhino-ui/components/src/components/box/box";
import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function Resize() {
    const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('');
      return (
        <Box gap="md">
          <TextareaInput
            id="resizeBoth"
            value={value1}
            label="Resize Me Vertically and Horizontally"
            onChange={event => setValue1(event.target.value)}
            resize="both"
          />
          <TextareaInput
            id="resizeNone"
            value={value2}
            label="Can't resize me"
            onChange={event => setValue2(event.target.value)}
            resize="none"
          />
        </Box>
      );
}