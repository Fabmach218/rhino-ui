import { SelectInput } from '@rhino-ui/components/src/components/select-input/select-input';
import { useState } from 'react';

export default function Portal() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <SelectInput
          id="portal"
          label="Flavors"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
          menuPortalTarget={document.body}
        />
      );
}