import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function Clearable() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(options[0]);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="clearable"
            label="Label"
            value={value}
            name="myClearableSelect"
            onChange={event => setValue(event.target.value)}
            options={options}
            isClearable
          />
        </div>
      );
}