import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function HelpText() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="helpText"
          value={value}
          label="Design Notes"
          helpText="Add any design requirements or aesthetic choices that the solar system designer should know"
          onChange={event => setValue(event.target.value)}
        />
      );
}