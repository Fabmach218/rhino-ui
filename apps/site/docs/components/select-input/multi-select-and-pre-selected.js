import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function MultiSelectAndPreSelected() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState([options[0], options[2]]);
      return (
        <div style={{ height: '200px' }}>
          <SelectInput
            id="preSelectMultiSelect"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            isMulti
          />
        </div>
      );
}