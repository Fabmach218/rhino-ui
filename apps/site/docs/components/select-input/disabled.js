import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function Disabled() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div style={{ height: '85px' }}>
          <SelectInput
            id="disabled"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isDisabled
          />
        </div>
      );
}