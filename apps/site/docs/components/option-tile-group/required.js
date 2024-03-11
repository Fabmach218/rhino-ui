import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function Required() {
    const [value, setValue] = useState('chocolate');
      const options = [
        {
          id: 'chocolate_required',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_required',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_required',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <OptionTileGroup
          name="required"
          title="Ice cream flavors"
          isRequired
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
        />
      );
}