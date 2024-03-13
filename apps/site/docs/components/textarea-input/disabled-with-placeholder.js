import { TextareaInput } from "@rhino-ui/components/src/components/textarea-input/textarea-input";
import { useState } from 'react';

export default function DisabledWithPlaceholder() {
    const [value, setValue] = useState('');
      return (
        <TextareaInput
          id="disabledWithPlaceholder"
          value={value}
          label="Disabled TextareaInput With Placeholder"
          onChange={event => setValue(event.target.value)}
          isDisabled
          placeholder="Useful placeholder..."
        />
      );
}