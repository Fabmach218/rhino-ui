import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function HiddenLabel() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div style={{ height: '175px' }}>
          <SelectInput
            id="labelHidden"
            label="My label is hidden"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
            hideLabel
          />
        </div>
      );
}