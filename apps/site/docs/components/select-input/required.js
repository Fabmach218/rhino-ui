import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function Required() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="required"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isRequired
          />
        </div>
      );
}