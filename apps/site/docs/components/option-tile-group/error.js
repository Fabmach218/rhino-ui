import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function Error() {
    const [value, setValue] = useState([]);
      const options = [
        {
          id: 'chocolate_error',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_error',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_error',
          value: 'vanilla',
          label: 'Vanilla',
          disabled: true,
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
          error="You should really select an ice cream flavor!"
        />
      );
}