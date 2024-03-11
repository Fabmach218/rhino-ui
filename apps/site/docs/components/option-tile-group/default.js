import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function Default() {
    const [value, setValue] = useState('chocolate');
      const options = [
        {
          id: 'chocolate_default',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_default',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_default',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <OptionTileGroup
          name="default"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
        />
      );
}