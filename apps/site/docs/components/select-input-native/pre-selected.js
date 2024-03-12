import { SelectInputNative } from '@rhino-ui/components/src/components/select-input-native/select-input-native';
import { useState } from 'react'

export default function PreSelected() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [value, setValue] = useState(options[1].value);
      return (
        <div>
          <SelectInputNative
            id="preSelected"
            label="Label"
            onChange={event => setValue(event.target.value)}
            options={options}
            value={value}
          />
        </div>
      );
}