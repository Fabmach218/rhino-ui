import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function HiddenInput() {
    const [value, setValue] = useState('chocolate');
      const options = [
        {
          id: 'chocolate_hidden',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_hidden',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_hidden',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <OptionTileGroup
          name="hidden"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
          hideInput
        />
      );
}