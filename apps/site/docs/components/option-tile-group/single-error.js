import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function SingleError() {
    const [value, setValue] = useState('strawberry');
      const options = [
        {
          id: 'chocolate_error2',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_error2',
          value: 'strawberry',
          label: 'Strawberry',
          error: 'single error',
        },
        {
          id: 'vanilla_error2',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <OptionTileGroup
          name="required"
          title="Ice cream flavors"
          description="Only if you eat all your dinner"
          isRequired
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
        />
      );
}