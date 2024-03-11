import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function MultiSelect() {
    const [value, setValue] = useState([]);
      const handleSetValue = event => {
        const selectedValue = event.target.value;
        if (value.includes(selectedValue)) {
          setValue([...value].filter(v => v !== selectedValue));
        } else {
          setValue([...value, selectedValue]);
        }
      };
      const options = [
        {
          id: 'chocolate_multi',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_multi',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_multi',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <OptionTileGroup
          name="multi"
          value={value}
          onChange={handleSetValue}
          options={options}
          isMulti
        />
      );
}