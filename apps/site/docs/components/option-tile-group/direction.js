import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function Direction() {
    const [valueVertical, setValueVertical] = useState('chocolate');
      const optionsVertical = [
        {
          id: 'chocolate_direction',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_direction',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_direction',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <>
          <p className="m-bottom-md font-size-lg font-weight-bold">
            Responsive Direction (change your viewport to see it in action)
          </p>
          <OptionTileGroup
            name="directionVertical"
            value={valueVertical}
            onChange={event => setValueVertical(event.target.value)}
            options={optionsVertical}
            direction={{ base: 'column', tablet: 'row' }}
          />
        </>
      );
}