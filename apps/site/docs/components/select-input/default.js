import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function Default() {
    const [value, setValue] = useState(null);
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="singleSelectWithLabel"
            label="Label"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
          />
        </div>
      );
}