import { SelectInputNative } from '@rhino-ui/components/src/components/select-input-native/select-input-native';
import { useState } from 'react'

export default function Autofocus() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(null);
      return (
        <div>
          <SelectInputNative
            id="autoFocus"
            label="Label"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            autoFocus
          />
        </div>
      );
}