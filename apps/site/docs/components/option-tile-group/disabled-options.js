import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function DisabledOptions() {
    const [value, setValue] = useState();
      const [valueMulti, setValueMulti] = useState([]);
      const handleSetValueMulti = event => {
        const selectedValue = event.target.value;
        if (valueMulti.includes(selectedValue)) {
          setValueMulti([...valueMulti].filter(v => v !== selectedValue));
        } else {
          setValueMulti([...valueMulti, selectedValue]);
        }
      };
      const options = [
        {
          id: 'chocolate_disabled',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_disabled',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_disabled',
          value: 'vanilla',
          label: 'Vanilla',
          disabled: true,
        },
      ];
      const optionsMulti = [
        {
          id: 'chocolate_disabled_multi',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_disabled_multi',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_disabled_multi',
          value: 'vanilla',
          label: 'Vanilla',
          disabled: true,
        },
      ];
      return (
        <>
          <OptionTileGroup
            name="disabled"
            value={value}
            onChange={event => setValue(event.target.value)}
            options={options}
            margin="0 0 lg 0"
          />
          <OptionTileGroup
            name="disabledMulti"
            value={valueMulti}
            onChange={handleSetValueMulti}
            options={optionsMulti}
            isMulti
          />
        </>
      );
}