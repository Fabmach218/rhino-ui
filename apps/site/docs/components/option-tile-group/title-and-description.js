import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function TitleAndDescription() {
    const [value, setValue] = useState('chocolate');
      const options = [
        {
          id: 'chocolate_title',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_title',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_title',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <OptionTileGroup
          name="titleAndDescription"
          title="Ice cream flavors"
          description="Only if you eat all your dinner"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
        />
      );
}